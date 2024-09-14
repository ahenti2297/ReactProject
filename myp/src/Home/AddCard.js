// import { useState } from "react";
import "./AddCard.css";
import cam from "../assets/camera.png";
import ClearIcon from '@mui/icons-material/Clear';

export default function AddCard(){
    

    return(
        <div className="createEvent">
            <div className="creating">
                <h1>Create an event</h1>
                <ClearIcon/>
            </div>
            <div className="uploading">
                <img src={cam} alt=""/>
                <h2>Upload cover image</h2>
                <p>Minimum width 480 pixels, 16.9 recommended</p>

            </div>
            {/* <div className="formType">
                <form className="forming">
                <input type="radio" id="online"/>
                <label>Online</label>
                </form>
               

            </div> */}

        </div>
    )
}