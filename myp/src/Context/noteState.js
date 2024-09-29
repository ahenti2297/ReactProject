// import React from "react";
import { useEffect, useState } from "react";
import noteContext from "./noteContext";
import PostService from "../service/PostService";
// import { IconButton } from "@mui/material";

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import IconButton from '@mui/material/IconButton';
import { styled, alpha } from '@mui/material/styles';
import Menu from "@mui/material/Menu";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 150,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '2px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 12,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));


function NoteState({children}){
    const getUserDetail = () => {
       return localStorage.getItem('userDetail') ? JSON.parse(localStorage.getItem('userDetail')) :  null
    }
    const [userDetail, setUserDetail] = useState(getUserDetail());
    const [page,setPage] = useState(0);
    const [posts,setPosts] = useState([]);
    const [nextPage, setNextpage] = useState(true);
    
    const[myStyle, setMyStyle]= useState({
      color: 'black',
      backgroundColor: 'white'
    })
    
    const[btntext, setbtnText] = useState("dark Mode");
    const toggleStyle =()=>{
      if(myStyle.color === 'black'){
        setMyStyle({
          color: 'white',
          backgroundColor: 'black'
        })
        setbtnText("light mode")
      }
        
        else{
          setMyStyle({
            color: 'black',
            backgroundColor: 'white'
          })
          setbtnText("Dark Mode")
        }
      
    }
  
    const ExpandMore = styled((props) => {
      const { expand, ...other } = props;
      return <IconButton {...other} />;
    })(({ theme, expand }) => ({
      transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    }));
  
    
    const getPosts =()=>{
        
        PostService.getPosts(page).then((res)=>{
            if(page==0){
                setPosts(res.data.data);
            }else{
                let tempFeeds = JSON.parse(JSON.stringify(posts))
                tempFeeds=[...tempFeeds,...res.data.data]
                setPosts(tempFeeds)
            }
            if(res.data.results != 10 || res.data.reults < 10){
                setNextpage(false)
            }
            else{
                setNextpage(true)
            }
        });
    }

    useEffect(()=>{
        getPosts();
        // toggleStyle();

    },[page])
    
    return(
        <noteContext.Provider value={{myStyle, setMyStyle, btntext, setbtnText, StyledMenu ,setUserDetail,getPosts,posts,setPosts,page,setPage,nextPage,setNextpage}}>
            {children}
        </noteContext.Provider>
    )
}

// export default UserContextProvider
export default NoteState;