import React from 'react'
import './Focus.css';
import LeftCard from '../LeftCard/LeftCard'
import Nav from '../../../navigation/Nav'
import Middle from '../middle/Middle';
import SideCard from '../SideCard/SideCard';

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
      flex: '2', // Equal widthfo
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
        <div style={styles.rightCard}>
          <SideCard/>
        </div>
        
      </div>
    </div>
    )
  }
