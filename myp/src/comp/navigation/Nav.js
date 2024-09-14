import React from 'react'
import "./Nav.css";
import SearchAppBar from '../../Home/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import IconButton from '@mui/material/IconButton';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { DarkMode } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Typography from '@mui/material/Typography';



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

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Nav() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
  
    // const [me, setMe] = React.useState('');
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
  
  return (
    <div className='topbarContainer' style={myStyle}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
    >
      
      
         <div className='topbarLeft'>
            <span className='logo'>
              in
            </span>
        </div>
       
        <div className='topbarCenter'>
          <SearchAppBar />

        </div>
        <div className='topbarRight' style={myStyle}>  
          
              <div className='topbarIcons'>
                <div className='topbarIconsItem'>
                      <HomeIcon onClick={()=>navigate("/layouts")}/>    
                      <span>Home</span>
                </div>            
                <div className='topbarIconsItem'>
                    <PeopleIcon onClick={()=>navigate("/people")}/>    
                    <span>MyNetwork</span>
                </div>            
                <div className='topbarIconsItem'>
                    <BusinessCenterIcon onClick={()=>navigate("/more")} />    
                    <span>Jobs</span>
                </div>            
                <div className='topbarIconsItem'>
                    <ChatRoundedIcon onClick={()=>navigate("/message")}/>    
                    <span>Messaging</span>
                </div>            
                <div className='topbarIconsItem'>
                    <NotificationsIcon onClick={()=>navigate("/notify")}/>    
                    <span>Notifications</span>
                    <span className='topbarIconbadge'>1</span>
                  </div>            
                <div className='topbarIconsItem'>
                    <AccountCircleIcon/>    
                    <span>
                          <Button
                          className='btnColor'
                          id="demo-customized-button"
                          aria-controls={open ? 'demo-customized-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          // variant="contained"
                          disableElevation
                          onClick={handleClick}
                          endIcon={<KeyboardArrowDownIcon />}>
                          Me                            
                          </Button>
                          <StyledMenu
                              id="demo-customized-menu"
                              MenuListProps={{
                                'aria-labelledby': 'demo-customized-button',
                              }}
                              anchorEl={anchorEl}
                              open={open}
                              onClose={handleClose}
                            >
                              <h4>Account</h4>
                              <div className='adjusted'>
                                    <button onClick={toggleStyle} type='button' >{btntext}</button>
                              </div>
                              {/* </div>   */}
                                <MenuItem onClick={handleClose} disableRipple>
                                  
                                  <button onClick={()=>navigate("/check")}>Try One month premium for $0</button>
                                </MenuItem>
                                <MenuItem onClick={handleClose} disableRipple>
                                  Setting & Privacy
                                </MenuItem>
                                <Divider sx={{ my: 0.5 }} />
                                <MenuItem onClick={handleClose} disableRipple>
                                Help
                                </MenuItem>
                                <MenuItem onClick={handleClose} disableRipple>
                                Language
                                </MenuItem>
              </StyledMenu>
                    </span>
                </div>            
                    
                <div className='topbarIconsItem'>
                    <AppsIcon onClick={()=>navigate("/business")} />    
                    <span>ForBusiness</span>
                </div>
                <div className='topbarIconsItem' >  
                    <span style={myStyle} onClick={()=>navigate("/check")}>Try Sales Navigator</span>
                </div>  
              </div>
          </div>

        </div>

  )
}
