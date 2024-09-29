import React from 'react';
import './Slidebar.css';
import { Share } from '../share/Share';
import Cost from '../Post/Cost';
import { useEffect, useContext } from 'react';
import noteContext from '../../Context/noteContext';

export default function Slidebar() {
  
  const {posts, getPosts}=useContext(noteContext);
    
    
    useEffect(()=>{
      getPosts()
    },[])
    
  return (
    <div className='slidebar'>
      <div className='.slidebarWrapper'>
          <Share/>
          {posts && posts.length > 0 ? (
                posts.map((post, index) => (
                    <Cost getPost={post} key={index} />
                ))
            ) : (
                <div style={{'marginTop':'-500px'}}>No posts available</div>
            )}
      </div>
    </div>
  )
} 

