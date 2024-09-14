import "./CardMulti.css";
import call from '../assets/1.svg';
import archi from '../assets/2.svg';
import reception from '../assets/3.svg';
export default function CardMulti(){
    return(
        <div className='badaPkt'>
            <div>
                <h1>Top Sales Navigator features</h1>
                </div>
                <div className='myCards'>
                    <div className='wholeCard'>
                        <img sx={{width: 200, height: 40}} src={call} alt=''/>
                        <h1>Find the right leads and accounts with advanced search</h1>
                        <p>Uncover decision makers faster using 40+ advanced search filters, streamlining your lead generation process.</p>
                    </div>
                    <div className='wholeCard'>
                        <img sx={{width: 200, height: 40}} src={archi} alt=''/>
                        <h1>50 InMails per month</h1>
                        <p>Directly message members outside of your network. It’s 4.6x more effective in hearing back than cold email.</p>
                    </div>
                    <div className='wholeCard'>
                        <img sx={{width: 200, height: 40}} src={reception} alt=''/>
                        <h1>Seize opportunities with real-time lead and account alerts</h1>
                        <p>Build better relationships with real-time updates and insights for smarter outreach.</p>
                    </div>
                </div>
            </div>
    )
}