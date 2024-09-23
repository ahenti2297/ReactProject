import React from 'react'
import './Group.css';
import bg from '../A/wallpaper.jpg';
import { MoreVert } from '@mui/icons-material';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import Diversity3Icon from '@mui/icons-material/Diversity3';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Group() {
  const styles = {
    groupWrapper: {
      backgroundColor: '#ffff'
    }
  };
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
          </div>  
              <div className='groupTopLeft'>
                  <div className='groupTopImage'>
                      <img src={bg} alt=''/>
                  </div>
                  <div  className='groupTopRight'>
                    <ShortcutIcon className='groupTopArrow'/>
                    <MoreVert className='groupTopMore'/>
                 </div>
              </div>
              
        </div>
          <div className='groupCenter'>
              <span className='groupTitle'>
                React Developers - ReactJS & React Native              
              </span>
              <br/>
              <span className='groupTitle'> Professional Development Mastermind</span>

              <div className='groupCenterLists'>
                  <ul className='groupLi'>
                    <li>
                      <Diversity3Icon className='groupList'/>
                      <span>Listed group</span>
                    </li>
                     <li>
                          399,875 members
                     </li>
                  </ul> 
              </div>

              <button className="joinBtn">Join</button>
          </div>  
       
    </div>
  );
}
