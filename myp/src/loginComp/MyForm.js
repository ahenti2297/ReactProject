import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './MyForm.css';

import {useFormik } from "formik";
import * as Yup from "yup";
import IconButton from '@mui/material/IconButton';
// import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import SignIn from '../Signlog/SignIn';
import { useState } from 'react';
// import { Button } from "@mui/material";
import Modal from '@mui/material/Modal';
// import SignUp from '../Signlog/SignUp';
import { OutlinedInput } from '@mui/material';
import { useNavigate } from 'react-router-dom';




export default function MyForm(){ 
    const [showPassword, setShowPassword] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();

        const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      
    };   
    
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Please enter a valid email")
            .required("Email is required"),
        password: Yup.string()
            .required("Passwort is required")
            .min(6, "Password too short! Must be at least 6 characters."),
        
    
    });

  

  
    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
         console.log('login-data', values);
        },
      });
    
         
    return(
            <form className="login-data" onSubmit={formik.handleSubmit}>
                <div className='datain'>
                    
                    <h1>Welcome to your professional community</h1>                    
                    {/* <Box className='gapText'
                    component="form"
                    sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    > */}
                    <div>
                    <div className='emailprop'>
                    <label>Email or phone</label>
                    <OutlinedInput className="loginText" name="email" 
                    id="outlined-basic-email" autoComplete= "username"
                    label="" variant="outlined" value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helpertext={formik.touched.email && formik.errors.email}/>
                    </div>
                    </div>
                    {/* <br/> */}
                    <div>
                    <div className='passprop'>
                    <label>Password</label>
                    <OutlinedInput className="loginText" name="password" autoComplete='current-password'
                    id="outlined-basic-password" label="" variant="outlined" 
                    placeholder='show'type={showPassword ? 'text' : 'password'}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helpertext={formik.touched.password && formik.errors.password}
                    endAdornment={                            
                        <InputAdornment position="end"            
                        >                           
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>}
                    />
                        </div>
                    </div>
                    <div className='forgot'>
                    <p>Forgot password?</p>
                    </div>
                    {/* </Box> */}
                    <div className="signIn-btn">
                    <Button type="submit" variant="outlined"onClick={()=>navigate("/layout")}>Sign in</Button>
                    </div>
                    <div>
                    <Button onClick={()=>navigate("/signU")}>Join Now</Button>
                          {/* <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                                <Button >
                                      
                                </Button>
                            </Modal>  */}
                      </div>
                    <div  className='agreement'>
                        <p>By clicking Continue, you agree to LinkedIn’s User Agreement, Privacy Policy, and Cookie Policy.</p>
                    </div>
                </div>    
                <div><img src="https://media.licdn.com/media//AAYAAgSrAAgAAQAAAAAAAGM6w-NyPk-_SVikYiCJ6V3Z-Q.png" alt=''/>  </div>      
            </form>      
    )
}