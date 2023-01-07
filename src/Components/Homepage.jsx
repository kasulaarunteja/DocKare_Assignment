import React from 'react';
import "./Homepage.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { IconButton } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const Homepage = () => {
    return (
        <div className='main_body'>
            <div className='mainbody_top'>
            <div className='mainbody_top_left'>
               Recten forms
            </div>
            <div className='mainbody_top_right'>
             <div className='main_top_center'>
                Owend by anyone <ArrowDropDownIcon/>
             </div>
             <IconButton>
                <SortByAlphaIcon/>
             </IconButton>
             <IconButton>
                <StorageIcon />
             </IconButton>
             <IconButton>
                <FolderOpenIcon />
             </IconButton>
            </div>
            </div>
            <div className='mainbody_doc'>
                 <div className='doc_card'>
                    <img src="/images/docment.png" className='doc_image'/> 
                    <div className='doc_card_content'>
                        <div className='doc_content'>
                            <div className='content_left'>
                            <StorageIcon />
                            </div>
                             <MoreVertIcon/>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    );
}

export default Homepage;
