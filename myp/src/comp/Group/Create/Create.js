import React, { useState } from 'react';
import './Create.css'; 
import backg from './A/background.png';
import group from './A/group.png';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    height: '70vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function Create() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div className='createCard' >
        <div onClick={handleOpen}>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
             >
                <Box sx={style}>
                        <div className='createProfile'> 
                            <h3 className='createTitle'>Create Group</h3>
                            <div className='createProfileData'>
                                <div className='createBackground'>
                                    <img className='createProfileImg' src={backg} alt=''/>
                                    <ModeEditOutlineIcon className='editPen'/>      
                                </div>
                               
                                <img className='profileImg' src={group} alt=''/>
                                <ModeEditOutlineIcon className='editProfile'/>
                            </div>
                            
                        </div>
                        <div className='createCardContainer'>
                        </div>


                </Box>
        
            </Modal>
        </div>
    </div>
  )
}
