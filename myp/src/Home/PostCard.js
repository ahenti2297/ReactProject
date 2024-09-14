import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./PostCard.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import CommentIcon from '@mui/icons-material/Comment';
import ScreenRotationAltIcon from '@mui/icons-material/ScreenRotationAlt';
import SendIcon from '@mui/icons-material/Send';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import CardMedia from '@mui/material/CardMedia';
import { useState } from 'react';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function PostCard({ getPost }) { // Destructured getPost for easier access
  const [like, setLike] = useState(0);
  const [isLike, setIsLike] = useState(false);

  const likeHandler = () => {
    setLike(isLike ? like - 1 : like + 1);
    setIsLike(!isLike);
  };

  return (
    <div className="boxing">
      <div className="tabs">
        <div className="firstTab">
          <AccountCircleIcon />
          <span>like this</span>
        </div>
        <div className="secTab">
          <MoreHorizIcon sx={{ fontSize: 15 }} />
          <ClearIcon sx={{ fontSize: 15 }} />
        </div>
      </div>
      <div className="tab2">
        <AccountCircleIcon className="account" sx={{ fontSize: 38 }} />
        <AddIcon className="adds" sx={{ fontSize: 20 }} />
        <h2>Follow</h2>
      </div>
      <div className="myMedia">
        <CardContent className="contentMark">
          <Typography>
            {getPost?.content || "No content available"}
          </Typography>
        </CardContent>
        {getPost?.images && (
          <CardMedia
            className="imPost"
            component="img"
            width="100vw"
            height="100vh"
            image={getPost.images}
            alt="Post Image"
          />
        )}
      </div>
      <div className="controller">
        <div className="pin">
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          <p onClick={likeHandler}>
            {isLike ? "Unlike" : "Like"}
          </p>
        </div>
        <div className="pin">
          <CommentIcon />
        </div>
        <div className="pin">
          <ScreenRotationAltIcon />
        </div>
        <div className="pin">
          <SendIcon />
        </div>
      </div>
    </div>
  );
}
