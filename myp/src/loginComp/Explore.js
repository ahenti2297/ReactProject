import './explore.css'
// import Button from '@mui/material/Button';
export default function Explore(){
    return(
    
        <div className="full">
            <div className="explore">
                <h2>Explore collaborative articles</h2>
                <p>We're unlocking community knowledge in a new way. Experts and insights directly into each article, started with the help of AI.</p>
            </div>

            <div className="explore-article">
                    
                    <button className="explore-content">Marketing</button>               
                    <button className="explore-content">Public Administration</button>               
                    <button className="explore-content">Healthcare</button>                
                    <button className="explore-content">Engineering</button>                    
                    <button className="explore-content">IT Services</button>
                    <button className="explore-content">Sustainability</button>
                    <button className="explore-content">Business Administration</button>
                    <button className="explore-content">Telecommunications</button>
                    <button className="explore-content">HR Management</button>
                    <button className="explore-content">Show All</button>
              
            </div>
        </div>
    
    );
}