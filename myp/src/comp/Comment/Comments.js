import React, { useState } from 'react'
import './Comment.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Comments() {
    const [comments, setComment] = useState();
    
    return (
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
           
          </AccordionSummary>
          <AccordionDetails>
           
          </AccordionDetails>
        </Accordion>
      </div>
    );
}
