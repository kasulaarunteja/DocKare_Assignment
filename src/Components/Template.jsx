import React from 'react';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./Template.css"






const Template = () => {
    return (
        <div className='template_section'>
            <div className='template_top'>
                <div className='template_left'>
                    <span style={{fontSize:"16px",color:'#202124'}}>Start New Form </span>
                </div>
                <div className='template_right'>
                 <div className='gallery_button'>
                     Template gallery
                     <UnfoldMoreIcon fontSize='small'/>
                 </div>
                 <IconButton>
                    <MoreVertIcon fontSize='small'/>
                 </IconButton>
                </div>
            </div>
            <div className='template_body'>
                <div className='card'>
                   <img src='/images/formsblank.png' className='cardimg'/>
                   <p className='card_title'>Blank</p>
                </div>
                <div className='card'>
                   <img src='/images/contact.png' className='cardimg'/>
                   <p className='card_title'>Contact</p>
                </div>
                <div className='card'>
                   <img src='/images/party.png' className='cardimg'/>
                   <p className='card_title'>Party</p>
                </div>
            </div>
        </div>
    );
}

export default Template;
