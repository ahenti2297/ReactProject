import './CardPlease.css';
import bg from "../assets/floral.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import gold from "../assets/goldenBis.jpg";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import TagIcon from '@mui/icons-material/Tag';
import GroupsIcon from '@mui/icons-material/Groups';
import dow from '../assets/downarrow.png';
import { useState } from 'react';
// import AddCard from './AddCard';

import AddIcon from '@mui/icons-material/Add'

export default function CardPlease(postId){
    const [createPost, setCreatePost] = useState("false");
    const handleChange=(event, nextView)=>{
        setCreatePost(nextView);
    };
    
    return(
        <div className='Box'>
            <div className="pic1">
                <img src={bg} alt=""/>
                <div className="icons">
                    <AccountCircleIcon sx={{fontSize:60}}/>

                    <h1>Computer Operator</h1>
                        <div className="cardBox">
                            <div>
                                <h2>Profile viewers{postId.id}</h2>
                            </div>
                            <div>s
                                <h2>View all analytics</h2>
                            </div>
                        </div>
                </div>    
            </div>

                <div className="cardBall">
                    <div className="carB" >
                        <h2>Strengthen your profile with an AI writing assistant</h2>
                                        
                        <div className="cardGold">
                            <img src={gold} alt=""/>
                            <h2>Try Sales Navigator</h2>
                        </div>
                    </div>
                    <div className="cardTold">
                        <BookmarkIcon className="cardT" sx={{fontSize: 20}}/>
                        <h2>Saved items</h2>
                    </div>
                </div>
                <div className="baksa">
                                <div className='rec'>
                                    <h2>Recent</h2>
                                    <img src={dow} alt=''/>
                                </div>
                                    <div >
                                        <div className="cardGroup">
                                            <GroupsIcon sx={{fontSize:18}}/>
                                            <h2>Brain Expansion Group</h2>
                                        </div>                       
                                        <div className="cardGroup">
                                            <GroupsIcon sx={{fontSize:18}}/>
                                            <h2>Cre8: The UX of AI</h2>
                                        </div>
                                        <div className="cardGroup">
                                            <TagIcon sx={{fontSize:18}}/>
                                            <h2>india</h2>
                                        </div>
                                        <div className="cardGroup">
                                            <GroupsIcon sx={{fontSize:18}}/>
                                            <h2>JavaScript</h2>
                                        </div>
                                    </div>
                        </div>
                        <div className="grouping">
                                <div>
                                    <h1>Group</h1>
                                </div>
                                
                                    <div>
                                        <div className="roup">
                                            <GroupsIcon sx={{fontSize:18}}/>
                                            <h2>Brain Expansion Group</h2>
                                        </div>                       
                                        <div className="roup">
                                            <GroupsIcon sx={{fontSize:18}}/>
                                            <h2>Cre8:The UX of AI</h2>
                                        </div>                       
                                        <div className="roup">
                                            <GroupsIcon sx={{fontSize:18}}/>
                                            <h2>JavaScript</h2>
                                        </div>                      
                                        
                                    </div>
                            </div>
                        <div >
                            <div className="mygroup">
                                    <h1>Events</h1>
                                        <AddIcon
                                            orientation="vertical"
                                            value={createPost}
                                            exclusive
                                            onClick={handleChange}    
                                        />
                                        {/* <AddCard/> */}
                        </div>
                                
                            </div>

                            <div >
                                <div className="follow">
                                    <h1>Followed Hashtags</h1>
                                </div>
                                <div className="cardCopy">
                                    <TagIcon sx={{fontSize:15}}/>
                                    <h2>india</h2>
                                </div>
                                <div className="cardCopyed">
                                    <h2>See all</h2>
                                </div>                                
                            </div>

                            <div className='disc'> 
                                <h1>Discover more</h1>
                            </div>
                   </div>         
    

    )
}