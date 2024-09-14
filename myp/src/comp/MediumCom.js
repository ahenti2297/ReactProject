import React from 'react';
import RIghtbar from './rightside/RIghtbar';
import Slidebar from './silide/Slidebar';
import Leftbar from './Leftside/Leftbar';
import Nav from './navigation/Nav';

export default function MediumCom() {
  const styles = {
    homeContainer: {
      display: 'flex',
    },
    nav:{
      position: 'fixed',
    },
    leftbar: {
      flex: '1', // Equal width
    },
    slidebar: {
      flex: '4', // Equal widthfo
    },
    rightbar: {
      flex: '1', // Equal width
      position: 'fixed',
      top: '20', // Changed from '20' to '20px'
      right: '0',
      height: '100vh',
      overflowY: 'auto',
      backgroundColor: '#f0f0f0', 
      padding: '10px',  
    },
    content: {
      marginRight: '40.33%', // Adjust to fit equal division
      marginLeft: '0.5%', // Adjust to fit equal division
    },
  };

  return (
    <div>
      <Nav />
      <div style={styles.homeContainer}>
        <div style={styles.leftbar}>
          <Leftbar />
        </div>
        <div style={styles.content}>
          <Slidebar />
        </div>
        <div style={styles.rightbar}>
          <RIghtbar />
        </div>
      </div>
    </div>
  );
}
