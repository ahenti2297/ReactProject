import './Search.css';
import Button from '@mui/material/Button';
export default function Search(){
    return(
    

        
        <div className="full-search">
            <div className="search-suggest">
                <h2>Find the right job or internship for you</h2>
                
            </div>

            <div className="work-on">
               <p>SUGGESTED SEARCHES.</p> 
          
                <div className='grouping'>         
                    <Button variant="outlined">Engineering</Button>
                    <Button variant="outlined">Business Development</Button>
                    <Button variant="outlined">Finance</Button>
                    <Button variant="outlined">Administrative Assistant</Button>
                    <Button variant="outlined">Retail Associate</Button>
                    <Button variant="outlined">Customer Service</Button>
                    <Button variant="outlined">Operations</Button>
                    <Button variant="outlined">Information Technology</Button>
                    <Button variant="outlined">Marketing</Button>
                    <Button variant="outlined">Human Resources</Button>
                    <Button variant="outlined">Healthcare Services</Button>
                    <Button variant="outlined">Sales</Button>
                    <Button variant="outlined">Program and Project Management</Button>
                    <Button variant="outlined">Accounting</Button>
                    <Button variant="outlined">Arts & Design</Button>
                    <Button variant="outlined">Community and Social Services</Button>
                    <Button variant="outlined">Consulting</Button>
                    </div>
                </div>
        </div>
    );
};