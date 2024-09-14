import React from 'react';
import './Share.css';
import { Avatar } from '@mui/material';
// import { blueGrey } from '@mui/material/colors'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import NewPost from '../NewPost/NewPost';


export function Share() {
    const styles = {
        postWrapper: {
          'backgroundColor':'#ffff',
          'marginTop':'20px'
        }
      }
  return (
    <div className='share' style={styles.postWrapper}>
        <div className='shareWrapper'>
                <div className='shareTop'>
                    {/* <img className='shareprofilePic' src='' alt=''/> */}
                    <Avatar className='shareprofilePic'/>
                    
                   
                    <div>
                            
                    <NewPost/>
                    </div>
                </div>  
                <hr className='shareHr'/>
                <div className='shareBottom'>
                    <div className='shareOptions'>
                        <div className='shareOption'>   
                            <PermMediaIcon htmlColor='red' className='shareIcon'/>
                            <span className='shareOptionText'>
                                Media
                            </span>
                        </div>
                        <div className='shareOption'>   
                            <CalendarMonthIcon htmlColor='blue' className='shareIcon'/>
                            <span className='shareOptionText'>
                                Event
                            </span>
                        </div>
                        <div className='shareOption'>   
                            <AssignmentIcon htmlColor='brown' className='shareIcon'/>
                            <span className='shareOptionText'>
                              Write article
                            </span>
                        </div>
                        <div className='shareOption'>   
                            <EmojiEmotionsIcon htmlColor='teal' className='shareIcon'/>
                            <span className='shareOptionText'>
                               Feelings
                            </span>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}
