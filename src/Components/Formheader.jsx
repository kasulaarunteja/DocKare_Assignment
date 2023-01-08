import React from 'react';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { IconButton } from '@mui/material';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Formheader.css";

const Formheader = () => {
    return (
        <div className='form_header'>
            <div className='form_header_left'>
            <img src="/images/225.png" style={{height:'45px',width:"40px"}} />
            <input type='text' placeholder='Untitled form' className="form_name" ></input>
            {/* <span>All changes save in Drive</span> */}
              <IconButton>
                <StarOutlineIcon className='formheade_icon' style={{marginRight:'10px'}}/>
              </IconButton>
            </div>
            <div className='form-header_right'>
                <IconButton>
                   <PaletteOutlinedIcon size="small" className='form_header_icon'/>
                </IconButton>
                <IconButton>
                   <RemoveRedEyeOutlinedIcon size="small" className='form_header_icon'/>
                </IconButton>
                <IconButton>
                    <UndoIcon size="small" className='form_header_icon'/>
                </IconButton>
                <IconButton>
                    <RedoIcon size="small" className='form_header_icon'/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon size="small" className='form_header_icon'/>
                </IconButton>
                <IconButton>
                      <AccountCircleIcon  size="small" className='form_header_icon'/>
                </IconButton>
            </div>
        </div>
    );
}

export default Formheader;
