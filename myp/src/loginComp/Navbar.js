import './Navbar.css';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PeopleIcon from '@mui/icons-material/People';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LaptopIcon from '@mui/icons-material/Laptop';
// import Button from '@mui/material/Button';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import SignIn from '../Signlog/SignIn';
import logo from '../assets/Linkedin.png';
import { useNavigate } from 'react-router-dom';



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
export default function Navbar(){
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const navigate = useNavigate();
    return(
      <div className="content">
        <div className="cont">
            <div className="LinkedInLo">
             <img src={logo} alt="logo_img"/>
            </div>        
            <div className="NavbarTools">
             <div className="artProp">
               <NewspaperIcon width={20}/>
                <p>Articles</p>
             </div>
             <div className="peopProp">
                <PeopleIcon/>
                <p>People</p>
             </div>
             <div className="learnProp"> 
             <SmartDisplayOutlinedIcon/>   
                <p>Learning</p>
             </div>
             <div className="jobProp">
             <BusinessCenterIcon/>
             <p>Job</p>
            </div>
            <div className="getApp">
             <LaptopIcon/>
             <p>Get the app</p>
            </div> 
            <div className="join-btn">
            <Button variant="text" onClick={()=>navigate("/signU")}>Join Now</Button>
            </div>
            <div className="sign-in">
            {/* <Button variant="outlined">Sign In</Button> */}
            {/* <div> */}
            <Button onClick={()=>navigate("/signIn")}>Sign In</Button>
                  {/* <Modal
                     open={open}
                     onClose={handleClose}
                     aria-labelledby="modal-modal-title"
                     aria-describedby="modal-modal-description"
                  >
                     <Box>
                           <SignIn/>
                     </Box>
               </Modal> */}
      </div>
            
            </div>
           </div>
        </div> 
            
    );
};