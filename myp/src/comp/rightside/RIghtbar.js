// import React from 'react';
import './Rightbar.css';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function RIghtbar() {
  return (
    <div className='rightbar'>
            <div className='rightbarWrapper'>
              <div className='newsContainer'>
                  
                  <h2>LinkedIn News</h2>
                  {/* <img className='logoImg' src={taco} alt=" "/> */}
                  {/* <span className='newsText'>LinkedIn News</span> */}
              </div>
                              
              <h4 className="rightbarTitle">Top Stories</h4>
               
            <div className="rightbarAd">                         
                    <ul className="rightbarList">
                            <li className="rightbarFriend">
                                <div className='rightbarprofileImg'>
                                    <h5 className='rightbarOnline'>KKR wins third IPL title</h5>
                                    <p className='rightbarOnline'>2d ago. 13,459 readers</p>
                                </div>
                            </li>
                            <li className="rightbarFriend">
                                <div className='rightbarprofileImg'>
                                    <h5 className='rightbarOnline'>Hotels check-in to revenue boost</h5>
                                    <p className='rightbarOnline'>1d ago. 5,216 readers</p>
                                </div>                                
                            </li>
                            <li className="rightbarFriend">
                                <div className='rightbarprofileImg'>
                                    <h5 className='rightbarOnline'>Telecom hires more freshers</h5>
                                    <p className='rightbarOnline'>12h ago. 431 readers</p>
                                </div>
                            </li>
                            <li className="rightbarFriend">
                                <div className='rightbarprofileImg'>
                                    <h5 className='rightbarOnline'>smaller cities see a jobs surge</h5>
                                    <p className='rightbarOnline'>1d ago. 3,066 readers</p>
                                </div>                               
                            </li>
                            <li className="rightbarFriend">
                                <div className='rightbarprofileImg'>
                                    <h5 className='rightbarOnline'>Rise of conversational commerce</h5>
                                    <p className='rightbarOnline'>1d ago. 3,461 readers</p>
                                </div>
                                
                            </li>
                        </ul> 


                        <div className="userName">
                            <h4>Show more</h4>
                            <KeyboardArrowDownIcon/>
                        </div> 
            
                </div>
            </div>
        </div>  
  )
}
