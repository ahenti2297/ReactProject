import mini from "../assets/Linkedin.png";
import "./Sign.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import AuthService from "../service/AuthService";
import { useContext } from 'react';
import noteContext from "../Context/noteContext";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const { setUserDetail} = useContext(noteContext);
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
      .required("Password is required")
      .min(6, "Password too short! Must be at least 6 characters."),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  const handleLogin = (values) => {
    AuthService.login(values.email, values.password).then((res) => {
      localStorage.setItem('userDetail', JSON.stringify(res?.data?.data));
      localStorage.setItem('token', res?.data?.token);
      setUserDetail(res.data.data);
      setTimeout(() => {
        navigate('/layouts');
      }, 100);
    });
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <form className="SigningBox" onSubmit={formik.handleSubmit}>
        <div className="context">
          <img src={mini} alt="LinkedIn" />
        </div>
        <div className="Alltext">
          <div className="card">
            <h2>Welcome Back</h2>
          </div>
          <p>Don't miss your next opportunity.</p>
          <p>Sign in to stay updated on your professional world.</p>


        <ul>
          <li className="account">
        
            <OutlinedInput
              style={{ width: 400 }}
              name='email'
              id="outlined-basic"
              placeholder="Email or phone number"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error">{formik.errors.email}</div>
            )}
          </li>

          <li className="account">
            <OutlinedInput
              style={{ width: 400 }}
              name='password'
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
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
              placeholder="Password"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="error">{formik.errors.password}</div>
            )}
          
          </li>
        </ul>
          <div className="justText">
            <Button>Forgot Password</Button>
          </div>
          
          <div className="magicalBtn">
            <button type="submit">Sign in</button>
          </div>

          <div className="joinner">
            <p>New to LinkedIn?</p>
            <Button onClick={() => navigate("/signU")}>Join Now</Button>
          </div>
        </div>
      </form>
    </Box>
  );
}
