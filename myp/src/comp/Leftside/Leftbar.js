import React from 'react';
// import floral from '.../assets/floral.png';
import './Leftbar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DiamondIcon from '@mui/icons-material/Diamond';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupsIcon from '@mui/icons-material/Groups';
import TagIcon from '@mui/icons-material/Tag';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';

export default function Leftbar() {
  
  const navigate = useNavigate();
  return (
    <div className='leftbar'>
        <div className='leftbarWrapper'>
            {/* <ul > */}
              {/* <img src={floral} alt=""/> */}
              <AccountCircleIcon sx={{fontSize:60}} />
              <li>
                  Computer Operator
              </li>
              
                       
                     
            {/* </ul> */}
                  <ul className='leftbarList'>       
                    <li className='leftbarListItems'>
                      <ArrowForwardIosIcon className='leftbarIcon'/>
                    <span>Profile viewers</span>                    
                    </li>
                    <li className='leftbarListItems'> 
                    <ArrowForwardIosIcon className='leftbarIcon'/>
                    <span>View all analytics</span>              
                    </li>
                  </ul>
                  <ul className='leftbarList'>       
                    {/* <li className='leftbarListItems'>
                         <ArrowForwardIosIcon className='leftbarIcon'/>
                        <span>Strengthen your profile with an AI writing assistant</span>                    
                    </li> */}
                    <li className='leftbarListItems'>
                        <DiamondIcon className='leftbarIcon'/>
                        <span>Try Sales Navigator</span>              
                    </li>
                    <li className='leftbarListItems'>
                        <BookmarkIcon className='leftbarIcon'/>
                        <span>Saved items</span>              
                    </li>
                  </ul>
                  <ul className='leftbarList'>
                    <li className='leftbartag'>
                          <span>Recent</span>      
                          <KeyboardArrowDownIcon className='leftbarTagList'/>
                    </li>
                    <li className='leftbarListItems'>
                        <GroupsIcon className='leftbarIcon'/>
                        <span>Brain Expansion Group</span>                    
                    </li>
                    <li className='leftbarListItems'>
                        <GroupsIcon className='leftbarIcon'/>
                        <span >Cre8: The UX of AI</span>              
                    </li>
                    <li className='leftbarListItems'>
                        <GroupsIcon className='leftbarIcon'/>
                        <span>india</span>              
                    </li>
                    <li className='leftbarListItems'>
                        <GroupsIcon className='leftbarIcon'/>
                        <span>JavaScript</span>              
                    </li>
                  </ul>
                  <ul className='leftbarList'>
                    <li className='leftbartag'>
                      <span onClick={()=>navigate("/group")}>Groups</span>  
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
                    <span>India</span>                    
                    </li>
                    
                        {/* <span >See All</span>                     */}
                  
                  </ul>
                  <button className='leftbarBtn'>
                      See All...
                    </button>
                    <hr className='leftbarHr'/>
                    <ul>
                      <li>

                      </li>
                    </ul>
                  {/* </ul> */}
        </div>
        
    </div>
  )
}
