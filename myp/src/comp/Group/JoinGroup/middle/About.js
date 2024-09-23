import React from 'react';
import './About.css';
export default function About() {
    const styles = {
        aboutWrapper: {
          'backgroundColor':'#ffffff',
          'marginTop':'20px'
        }
      }
  return (
    <div className='about'>
        <div className='aboutWrapper'>
            <h4 className='aboutTitle'>
                About this group
            </h4>
                
                <div className='aboutTextTitle'>
                    <span>Welcome to the #1 Resource for React Developers on Linkedin!</span> 
                </div>
                <div className='aboutText'>
                    <span>
                        Do you use React at work? On a side project? Are you interested in learning React?
                    </span>
                </div>
                <div  className='aboutText'>
                    <span>
                        Then this group is for you!
                    </span>
                </div>
                
        </div>
    </div>
  )
}
