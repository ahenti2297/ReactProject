import React, { useContext } from 'react';
import './SIgnUp.css';
import {useFormik } from "formik";
import * as Yup from "yup";
import Box from '@mui/material/Box';
import timi from '../assets/Linkedin.png';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../service/AuthService';
import SignIn from './SignIn';
import { ColorModeContext } from '../Context/themeContext';
// import axios from 'axios';


export default function SignUp(){
    const navigate = useNavigate();
    const [showPassword, setShowPassword] =useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    
    // const them = useContext(theme);

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("Name is required"),
        email: Yup.string()
            .email("Please enter a valid email")
            .required("Email is required"),
        password: Yup.string()
            .required("Passwort is required")
            .min(6, "Password too short! Must be at least 6 characters."),
      
    });

  
    const formik = useFormik({
        initialValues: {
          name:'',
          email: '',
          password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          // console.log(values);
         handleSignUp(values) ;
        },
      });
    
      const handleSignUp = (values) => {
        AuthService.signUp(values.name, values.email, values.password).then((res) => {
            console.log(res)
        })
        setTimeout(() => { 
            navigate('/signIn');
            handleClose(); 

        }, 100);

    }


    return(  
            // <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <form className='Fbox' onSubmit={formik.handleSubmit}> 
            <div>
                <img style={{width: 120}} src={timi} alt=""/>
            </div>
            <div className='login-card'>
                <div>
                <h2>Make the most of your professional life</h2>
                </div>
              
                <div className='login-box'> 
                <div className="login-name">
                    <label className="name" htmlFor='outlined-basic'>Name</label><br/>
                    <OutlinedInput className="nameInput" style={{width:320, height:30}} name='name' id="outlined-basic-name" 
                    label="Name" variant="outlined" autoComplete="username"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                </div>
                <div className="login-email">
                    <label className="email" htmlFor='outlined-basic'>Email or phone number</label><br/>
                    <OutlinedInput className="emailInput" style={{width:320, height:30}} name='email' id="outlined-basic-email" 
                    label="Email" variant="outlined" autoComplete="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helpertext={formik.touched.email && formik.errors.email}
                    />
                </div>
                <div className="login-pass">             
                <label className='passLabel' htmlFor="current-password">Password(+6 characters)</label>
                    <OutlinedInput style={{width:320, height:30}} name='password' className='passInput'                       
                        id="outlined-adornment-password"
                        autoComplete="current-password"
                        type={showPassword ? 'text' : 'password'}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helpertext={formik.touched.password && formik.errors.password}
                        endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"/>
                    <p className='paraFoot'>By clicking Agree & Join, you agree to the LinkedIn 
                        User Agreement, Privacy Policy, and Cookie Policy.</p>
                    <button className='footbtn' style={{width: 300, height: 50}} type='submit'>Agree & Join</button>
                    <p className='OrP'>or</p>
                    <button className='continueBtn' type='submit' onClick={()=>navigate("/signIn")} style={{width: 300, height: 50}}>Continue as</button>

                </div>
              </div>
              </div>
      </form> 
    );
};

