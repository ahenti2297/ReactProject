import React, { useState, useEffect, useCallback } from 'react';
import './Cost.css';
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

const fetchWithRetry = async (url, options, retries = 3) => {
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      return response.json();
    }
    if (response.status === 429 && retries > 0) { // Rate limit error
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait before retrying
      return fetchWithRetry(url, options, retries - 1);
    }
    throw new Error(`Request failed with status ${response.status}`);
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export default function Cost({ getPost }) {
  const [like, setLike] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Initialize like state based on getPost
    setLike(getPost.likes || 0);
    setIsLike(getPost.isLiked || false);

    const fetchComments = async () => {
      try {
        const data = await fetchWithRetry(`https://academics.newtonschool.co/api/v1/linkedin/post/${getPost._id}/comments`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'projectID': '60lfboqs7rjy'
          }
        });
        setComments(data.data || []);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [getPost, token]);

  const likeHandler = async () => {
    if (isLike) {
      try {
        const data = await fetchWithRetry(`https://academics.newtonschool.co/api/v1/linkedin/unlike/${getPost._id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'projectId': 'i1dieevrt9g1',
            'Authorization': `Bearer ${token}`
          }
        });
        if (data.message === "Post unliked successfully") {
          alert(data.message);
          setLike(like - 1);
          setIsLike(false);
        }
      } catch (error) {
        console.error("Error unliking the post:", error);
      }
    } else {
      try {
        const data = await fetchWithRetry(`https://academics.newtonschool.co/api/v1/linkedin/like/${getPost._id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'projectId': '60lfboqs7rjy',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ postId: getPost._id })
        });
        if (data.message === "Post liked successfully") {
          alert(data.message);
          setLike(like + 1);
          setIsLike(true);
        }
      } catch (error) {
        console.error("Error liking the post:", error);
      }
    }
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const addComment = async () => {
    if (newComment.trim() === '') return;

    try {
      const data = await fetchWithRetry(`https://academics.newtonschool.co/api/v1/linkedin/comment/${getPost._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'projectID': '60lfboqs7rjy'
        },
        body: JSON.stringify({ content: newComment })
      });
      if (data.message === "Comment added successfully") {
        alert(data.message);
        setComments([...comments, data.data]);
        setNewComment('');
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const deleteComment = async (commentId) => {
    try {
      const data = await fetchWithRetry(`https://academics.newtonschool.co/api/v1/linkedin/comment/${commentId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'projectID': '60lfboqs7rjy'
        }
      });
      if (data.message === "Comment deleted successfully") {
        alert(data.message);
        setComments(comments.filter(comment => comment._id !== commentId));
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const styles = {
    postWrapper: {
      backgroundColor: '#ffff'
    }
  };

  return (
    <div className='post' style={styles.postWrapper}>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <Avatar className='postProfileImg'>{getPost?.author?.profileImage}</Avatar>
            <span className="postUsername">{getPost?.author?.name}</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <h1 className='postText'>{getPost?.images?.title}</h1>
          <span className='postText'>{getPost?.content || "No content available"}</span>
          {getPost?.images?.length > 0 && <img className='postImg' src={getPost.images} alt="post" />}
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <Checkbox
              {...label}
              className='likeBtn'
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              onClick={likeHandler}
              checked={isLike}
            />
            <span className='postlikeContainer'>{getPost.likeCount} people like it</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>{getPost.commentCount} Comments</span>
          </div>
        </div>
        <div className='commentsSection'>
          <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"

                id="panel2-header"
              >
              </AccordionSummary>
                <AccordionDetails>
                    <div className='commentBox'>
                      <div className='commentText'>
                        <Avatar className='commentPerson'/>
                          <input
                          type="text"
                          value={newComment}
                          onChange={handleCommentChange}
                          placeholder="Add a comment..."
                          className='commentInput'
                        />
                        <button onClick={addComment} className='commentButton'>Post</button>
                          
                      </div>
                      <div className='commentsList'>
                             <div className='commentsFound'>                                  
                                  {comments.map(comment => (
                                    <div key={comment._id} className='commentItem'>
                                          <Avatar className='commentPerson'>{getPost?.auth}</Avatar>
                                      <span className='authorName'>{getPost?.author?.name}</span>
                                       <span className='commentStyle'> {comment?.content}</span>
                                      <button onClick={() => deleteComment(comment._id)} 
                                        className='deleteButton'>Delete</button>

                                    </div>
                                  ))}
                              </div>  
                            
                          </div>
                      
                        </div>
                 
                  </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
