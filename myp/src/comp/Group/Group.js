import React from 'react'
import './Group.css';
// import Nav from '../navigation/Nav'
import bg from '../asset/wallpaper.jpg'
import { Avatar } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Group() {
  return (
    

    <div className='group' >
      <div className='groupWrapper'>
        <div className='groupTop'>
              <div className='groupPageHeading'>
                  <h1>React Developers</h1>
                    <div className='groupTopTag'>

                    <span >
                      ReactJS & React Native  
                    </span>
                    </div>
              </div>
            
          <div className='groupTopLeft'>
            <img src={bg} alt=''/>
            <span className="postUsername">Neha Tiwari</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <h4 className='postTitle'>neha</h4>
          <span className='postText'></span>
        </div>
       
        </div>
       
    
    </div>
  );
}