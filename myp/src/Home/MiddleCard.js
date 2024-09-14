import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './MiddleCard.css';
import media from "../assets/picture.png";
import article from "../assets/newspaper.png";
import event from "../assets/calendar.png";
import AddPost from './AddPost';
import { NavLink } from 'react-router-dom';
import SearchAppBar from './Search';
// import { fontGrid } from '@mui/material/styles/cssUtils';

export default function MiddleCard(){    
    return(
        <div className='NewBox'>
                        <div className='people-icon'>
                            <AccountCircleIcon sx={{fontSize:40}}/>
                                
                        </div>
                        
                        <div>
                            <AddPost/>
                        </div>
                 
                
            <div className='wrapper'>
                    <div className='gallery'>
                        <img  src={media} alt=''/>
                        <p>Media</p>
                    </div>
                    <div className='gallery'>
                        <img  src={event} alt=''/>
                        <p>Event</p>
                    </div>
                    <div className='gallery'>
                        <img  src={article} alt=''/>
                        <p>Write article</p>
                    </div>
                  
            </div>
        
        </div>
    )
}