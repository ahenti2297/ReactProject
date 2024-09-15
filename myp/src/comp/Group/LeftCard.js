import React from 'react';
// import floral from '.../assets/floral.png';
import './LeftCard.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DiamondIcon from '@mui/icons-material/Diamond';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupsIcon from '@mui/icons-material/Groups';
import TagIcon from '@mui/icons-material/Tag';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function LeftCard(getPost) {
  
  const navigate = useNavigate();
  return (
    <div className='leftbar'>
        <div className='leftbarWrapper'>
            {/* <ul > */}
              {/* <img src={floral} alt=""/> */}
              <AccountCircleIcon sx={{fontSize:60}}>{getPost?.author?.profileImage}</AccountCircleIcon>
                   
                    
                  <ul className='leftbarList'>
                    <li className='leftbartag'>
                      <span>Groups</span>  
                    </li>     
                   
                            <li className='leftbarListItems'>
                              <GroupsIcon className='leftbarIcon'/>
                              <span>Brain Expansion Group</span>                    
                          </li>
                          <li className='leftbarListItems'>
                              <GroupsIcon className='leftbarIcon'/>
                              <span>Cre8: The UX of AI</span>              
                          </li>
                          <li className='leftbarListItems'>
                              <GroupsIcon className='leftbarIcon'/>
                              <span>JavaScript</span>              
                          </li>
                      
                  </ul>
                  <ul className='leftbarList'>
                    <li className='leftbartag'>
                      <span>Events</span>  
                    </li>
                     
                  </ul>
                  <ul className='leftbarList'>
                          
                    <li className='leftbarListItems'>
                    <TagIcon className='leftbarIcon'/>
                    <span>Hashtags</span>                    
                    </li>
                    
                        {/* <span >See All</span>                     */}
                  
                  </ul>
                  <button className='leftbarBtn'>
                      Discover More
                  </button>
                   
        </div>
        
    </div>
  )
}
