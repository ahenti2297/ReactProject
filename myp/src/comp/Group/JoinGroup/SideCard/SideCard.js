import React from 'react';
import './SideCard.css';
import  aiPic from '../A/ai.png';
import phplogo from '../A/php.png';
import zl from '../A/zoneLogo.png';

export default function SideCard() {
  return (
    <div className='rightCard'>
            <div className='rightCardWrapper'>
              <div className='rightCardTitle'>
                  <span>Groups you might be interested in</span>           
              </div>
                              
                         
            <div className="rightCardAd">                         
                        <ul className="rightCardList">                   
                            <li className="rightCardFriend">
                                  <div className='rightCardprofileImg'>
                                    <img src={aiPic} alt=''/>
                                  </div>   
                                   <div>
                                      <h5 className='rightCardOnline'>Artificial intelligence, Machine Learning, Computer vision, Analytics, Data Science, OpenAI, ChatGPT</h5>
                                      <p className='rightCardTags'>21,517 members</p>  
                                        <button className='joinedBtn'>Join</button> 
                                   </div>                            
                              </li>                            
                        </ul> 
                    <ul className="rightCardList">                   
                            <li className="rightCardFriend">
                                <div className='rightCardprofileImg'>
                                   <img src={phplogo} alt=''/>
                                </div>   
                                <div>
                                      <h5 className='rightCardOnline'>PHP Developers</h5>
                                      <p className='rightCardTags'>108,691 members</p>  
                                        <button className='joinedBtn'>Join</button> 
                                </div>                            
                            </li>
                        </ul> 
                        <ul className="rightCardList">                   
                              <li className="rightCardFriend">
                                    <div className='rightCardprofileImg'>
                                          <img src={zl} alt=''/>
                                    </div>   
                                    <div>
                                        <h5 className='rightCardOnline'>Frontend Developers, HTML, CSS, JavaScript</h5>
                                        <p className='rightCardTags'>149,720 members</p>  
                                          <button className='joinedBtn'>Join</button> 
                                    </div>                            
                              </li>                              
                        </ul> 
                </div>
            </div>
        </div>  
  )
}
