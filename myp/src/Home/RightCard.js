import './RIghtCard.css';
import info from '../assets/square.png';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import down from '../assets/downarrow.png';
export default function RightCard(){
    return(
        <div className="new" position="static">
            <div className="news">
                <h1>LinkedIn News</h1>
                <img src={info} alt=""/>
            </div>            
            <div className="story">
                <div className="heading">
                <h2>Top Stories</h2>

                </div>
                <div className="boxy">
                        <div className="tagsFill">
                            <h3>KKR wins third IPL title</h3>
                            <p>2d ago. 13,459 readers</p>
                        </div>
                        <div className="tagsFill">
                            <h3>Hotels check-in to revenue boost</h3>
                            <p>1d ago. 5,216 readers</p>
                        </div>
                        <div className="tagsFill">
                            <h3>Telecom hires more freshers</h3>
                            <p>12h ago. 431 readers</p>
                        </div>
                        <div className="tagsFill">
                            <h3>smaller cities see a jobs surge</h3>
                            <p>1d ago. 3,066 readers</p>
                        </div>
                        <div className="tagsFill">
                            <h3>Rise of conversational commerce</h3>
                            <p>1d ago. 3,461 readers</p>
                        </div>
                    </div>
                    <div className="showOrhide">
                        <h2>Show more</h2>
                        <img src={down} alt=''/>
                    </div>
            </div>
        </div>
    )
}