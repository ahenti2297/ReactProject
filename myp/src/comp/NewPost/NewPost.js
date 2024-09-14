import React, { useContext, useEffect, useRef, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ClearIcon from '@mui/icons-material/Clear';
import Modal from '@mui/material/Modal';
import RestoreIcon from '@mui/icons-material/Restore';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ImageIcon from '@mui/icons-material/Image';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import "./NewPost.css";
import { Formik, useFormik } from "formik";
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import * as Yup from "yup";
import http from 'axios'; 
import noteContext from '../../Context/noteContext';
import { useNavigate } from 'react-router-dom';

// Modal styling object
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function NewPost() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const { userDetails, getPosts, posts } = useContext(noteContext);

    const inputFileRef = useRef();
    const [file, setFile] = useState(null);
    const [uploadedFileURL, setUploadedFileURL] = useState(null);

    const validationSchema = Yup.object().shape({
        content: Yup.string().trim().required("Content is required"),
    });

    const triggerFileUpload = () => {
        inputFileRef.current.click();
    };

    const CloseImg = () => {
        setFile(null);
        setUploadedFileURL(null);
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log("Uploaded file:", file);
            setFile(file);
            setUploadedFileURL(URL.createObjectURL(file));
        }
    };

    const formik = useFormik({
        initialValues: {
            title: 'HI',
            content: '',
            // images: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            const formData = new FormData();
            formData.append('title', values.title);
            formData.append('content', values.content);
            if (file) {
                formData.append('images', file);
            }
                
            for (let pair of formData.entries()) {
                console.log(pair[0] + ', ' + pair[1]);
            }
    
            try {
                await addPost(formData);
                setOpen(false); 
                getPosts(); 
            } catch (error) {
                console.error("Error adding post:", error);
            }
        },
    });
    

    useEffect(() => {
        if (posts && posts._id) {
            formik.setValues({
                title: posts.title || '',
                content: posts.content || '', 
            });
            if (posts.images && posts.images.length > 0) {
                setUploadedFileURL(posts.images[0]);
            }
        }
    }, [posts, formik]);

    const addPost = (formData) => {
        const headers = {
            'Content-Type': 'multipart/form-data',
            'projectId': "60lfboqs7rjy",
            'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZDFmN2JiYTUyYmMxYjdhMmNhN2EwYSIsImlhdCI6MTcyNTA4NzcyMCwiZXhwIjoxNzU2NjIzNzIwfQ.jykhOzvIzy9Z1tnbnrTcSDF7HWw2KUoxdbqAWaqoOXM",
        };
    
        return http.post('https://academics.newtonschool.co/api/v1/linkedin/post', formData, { headers })
            .then(response => {
                console.log("Post response:", response);
            })
            .catch(error => {
                console.error("Error adding post:", error);
            });
    };

    return (
        <div className='myForm'>
            <input 
                    placeholder="what's in your mind" 
                    className='shareInput'
                    onClick={() => setOpen(true)}
                    />
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form className="mybox" onSubmit={formik.handleSubmit}>
                    <div className='ToggleBox'>
                        <div className='navbox'>
                            <div className='myPost'>
                                
                                <AccountCircleIcon sx={{ fontSize: 50 }} />
                                {/* <h1>{userDetails.name}</h1> */}
                                <ArrowDropDownIcon /> 
                                <ClearIcon className='clear' onClick={() => setOpen(false)} />
                            </div>

                            <div className='contentBox'>
                                <TextField
                                    id="outlined-multiline-static"
                                    multiline
                                    fullWidth
                                    rows={5}
                                    placeholder="What do you want to talk about?"
                                    name="content"
                                    value={formik.values.content}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.content && Boolean(formik.errors.content)}
                                    helperText={formik.touched.content && formik.errors.content}
                                />
                            </div>
                            
                                
                            <ul className='rapper'>
                                    <input
                                            className='searching'
                                            placeholder="Rewrite with AI"
                                        />
                        
                                <li className='gall'>
                                    <ImageIcon onClick={triggerFileUpload} />
                                    <input
                                        hidden
                                        multiline
                                        rows={7}
                                        accept="image/*"
                                        ref={inputFileRef}
                                        type="file"
                                        onChange={handleFileUpload}
                                    />
                                    <div className='create-post-img-select'>
                                        {uploadedFileURL && (
                                            <img
                                                src={uploadedFileURL}
                                                alt="Uploaded content"
                                                className="select-img"
                                            />
                                        )}
                                        {uploadedFileURL && (
                                            <IconButton
                                                onClick={CloseImg}
                                                sx={{ m: 0.5 }}
                                                className="create-post-img-close-icon"
                                            >
                                                <CloseRoundedIcon fontSize="small" />
                                            </IconButton>
                                        )}
                                    </div>
                                </li>
                                <li className='gall'>
                                    <CalendarMonthIcon />
                                </li>
                            </ul>
                            <div className='submit'>
                                <RestoreIcon />
                                <Button type='submit'>Post</Button>
                            </div>
                        </div>
                    </div>
                </form>
            </Modal>
        </div>
    );
}
