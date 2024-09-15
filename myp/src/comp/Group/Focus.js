import React from 'react'
import LeftCard from './LeftCard'
import Nav from '../navigation/Nav'
import Middle from './Middle';
// import RIghtCard from './RIghtCard';
import Right from './Right';
export default function Focus() {
  const styles = {
    homeContain: {
      display: 'flex',
    },
    nav:{
      position: 'fixed',
    },
    leftCard: {
      flex: '1', // Equal width
    },
    middle: {
      flex: '4', // Equal widthfo
    },
    rightCard: {
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
        <Nav/>
        <div style={styles.homeContain}>
        <div style={styles.leftCard}>
          <LeftCard />
        </div>
        <div style={styles.content}>
          <Middle />
        </div>
        
      </div>
    </div>
  )
}
