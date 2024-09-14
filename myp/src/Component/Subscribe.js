import { Button } from "@mui/material";
import Still from "../assets/loggedin.png";
import './Subscribe.css';
import { useNavigate } from "react-router-dom";

export default function Subscribe(){
    const navigate = useNavigate();
    return(
        <div className="NavBox">
            <div className="Nav">
                <img style={{width:30, height:30}} src={Still} alt=""/>
                <Button div className='iconis' onClick={()=>navigate("/layouts")}>Back to LinkedIn.com</Button>
            </div>
                        
        </div>
    )
}