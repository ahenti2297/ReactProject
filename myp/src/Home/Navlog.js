import * as React from 'react';
import './Navlog.css';
import { NavLink } from 'react-router-dom';
// import styled from 'styled-components'
import chill from '../assets/loggedin.png';
// import TextField from '@mui/material/TextField';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
// import messages from  '../assets/comment-dots-solid.svg';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import IconButton from '@mui/material/IconButton';
// import { styled } from '@mui/material/styles';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import CardPlease from './CardPlease';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import AddCard from './AddCard';
import TryIt from '../Component';
import SearchAppBar from './Search';
// import SearchResultsList from './searchResultsList';
// import Switch from '@mui/material/Switch';
// import { Button } from '@mui/material';
// import ToggleColorMode from '../Context/themeContext';
// import ToggleColorMode from '../Context/themeContext';

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


export default function Navlog(){

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
  
    const[result, setResult] = useState([]);

    return(
      <div className='navBoxEntire' style={myStyle}>
      <Box sx={{ width: 500 }} style={myStyle} position="static">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <div className='content2'style={myStyle}> 
        <div className='container'>
 
            <div className='inlogo'>
            <img style={{width: 40}} src={chill} alt=''/>
            </div>
            <div>                
                <SearchAppBar setResult={setResult}/>
                {/* <SearchResultsList result={result}/>                */}
            </div>  
            <div>
            <div className='iconistic'>
              <div>
                <HomeIcon onClick={()=>navigate("/layout")}/>
              </div>
              <div >
                <p>Home</p>
              </div>            
            </div>          
            <div className='iconistic'>
              <div>
                <PeopleIcon onClick={()=>navigate("/people")}/>
              </div>
              <div>
                <p>My Network</p>
              </div>            
            </div>          
            <div className='iconistic'>
              <div>
                <BusinessCenterIcon onClick={()=>navigate("/more")}/>
              </div>
              <div>
                <p>Jobs</p>
              </div>            
            </div>          
                    
            <div className='iconistic'>
              <div >
              <ChatRoundedIcon onClick={()=>navigate("/message")}/>
              </div>
              <div>
              <p>Messaging</p>
              </div>
            </div>
           
            <div className='iconistic'>
              <div>
                <NotificationsIcon onClick={()=>navigate("/notify")}/>
              </div>
              <div>
                <p>Notifications</p>
              </div>            
            </div>  
            <div className='iconistic'>
              <div className='icons'>
                <AccountCircleIcon/>
                
              </div>
              <div>
              <Button className='btnColor'
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                // variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
              >
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
            </div>       
            </div>        
            
            <div className='iconistic'>
                <AppsIcon onClick={()=>navigate("/business")}/>              
                <div>
                    <p>For Business</p>
                </div>
           </div>   
                    <div className='iconis' style={myStyle} onClick={()=>navigate("/check")}> 
                      Try Sales Navigator
                    </div> 
       

               
                   
              </div>
    </div>  
    </div>
    </BottomNavigation>
    </Box>
    </div>
  );

};