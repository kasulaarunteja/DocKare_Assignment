import React from "react";
import { Divider, Drawer,List,ListItem  } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { IconButton } from "@mui/material";
import './GoogleDrawer.css'
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';



const GoogleDrawer = () => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({
      ...state,
      [anchor]: open,
    });
  };



  const list =(anchor)=> (
    <div style={{width:"250px"}} role="presentation">
      <List>
        <ListItem style={{fontsize:'48px', marginLeft:'5px'}}>
         <span style={{color:"bule", fontweight:"700", fontsize:"22px", fontfamily:"'Product sans', Arial,sans-serif" }}>G</span>
         <span style={{color:"red", fontweight:"500", fontsize:"22px", fontfamily:"'Product sans', Arial,sans-serif" }}>o</span>
         <span style={{color:"yellow", fontweight:"500", fontsize:"22px", fontfamily:"'Product sans', Arial,sans-serif" }}>o</span>
         <span style={{color:"blue", fontweight:"500", fontsize:"22px", fontfamily:"'Product sans', Arial,sans-serif" }}>g</span>
         <span style={{color:"green", fontweight:"500", fontsize:"22px", fontfamily:"'Product sans', Arial,sans-serif" }}>l</span>
         <span style={{color:"red", fontweight:"500", fontsize:"22px", fontfamily:"'Product sans', Arial,sans-serif" }}>e</span>
           <span style={{color:'#5f6368', fontweight:'500', fontsize:'22px', fontfamily:"'Product sans', Arial,sans-serif"}}>Docs</span>
         </ListItem>
      </List>
      <Divider light />
     <List style={{marginLeft:'08px',marginRight:'08px',marginTop:'15px'}}>
      <ListItem className="list_items">
        <img src="/images/docs.png" id='imgs' />
        <div className='iconsname'>Docs</div>
      </ListItem>

      <ListItem className="list_items">
        <img src="/images/sheets.png" id='imgs' />
        <div className='iconsname'>Sheets</div>
      </ListItem>

      <ListItem className="list_items">
        <img src="/images/slides.png"  id='imgs'/>
        <div className='iconsname'>Slides</div>
      </ListItem>

      <ListItem className="list_items">
        <img src="/images/225.png" id='imgs'/>
        <div className='iconsname'>Forms</div>
      </ListItem>
     </List>
     <Divider light />
    <List>
      <ListItem className="list_items">
       <SettingsIcon/>
       <div className="iconsname">
        Settings
       </div>
      </ListItem>
      <ListItem className="list_items">
       <HelpOutlineIcon/>
       <div className="iconsname">
        Help & FeedBack
       </div>
      </ListItem>
    </List>
    <Divider light />

    <List style={{marginLeft:'08px',marginRight:'08px',marginTop:'15px'}}>
      <ListItem className="list_items">
        <img src="/images/drives.png" id='imgs'/>
        <div className='iconsname'>Docs</div>
      </ListItem>
     </List>
     <Divider light />
  </div>
  )
   
  

  return (
    <div>
      <React.Fragment>
        <IconButton onClick={toggleDrawer("left", true)}>
          <MenuIcon />
        </IconButton>
        <Drawer
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          anchor={"left"}
        >
         {/* <List>
             <ListItem>
               sidebar
             </ListItem>
         </List> */}
         {list('left')}

        </Drawer>

      </React.Fragment>
    </div>
  );
};

export default GoogleDrawer;
