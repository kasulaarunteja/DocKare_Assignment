import React,{useState,useEffect} from 'react';
import "./Homepage.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { IconButton } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import { useNavigate } from 'react-router';


const Homepage = () => {
     
      const [files, setFiles] = useState([]);
      
      async function filenames(){
         let request = await axios.get("http://localhost:8080/get_all_filename")
         let filenames = request.data;
         setFiles(filenames)
      }

      filenames();


      const navigate = useNavigate();
       
      function navigate_to(docname){
         let fname = docname.split('.');
         navigate("/form/" +fname[0]);
      }
      
      
     
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


               {files.map((ele) => (
                   <div className='doc_card'  
                     onClick={() => {
                        navigate_to(ele)
                     }}
                   >
                   <img src="/images/docment.png" className='doc_image'/> 
                   <div className='doc_card_content'>
                     <h5 style={{overFlow:'ellipsis'}}>{ele ? ele : "Untitled Doc"}</h5>
                       <div className='doc_content' style={{fontsize:'12px', color:'grey'}}>
                           <div className='content_left'>
                           <StorageIcon style={{color:'white',fontsize:'12px', backgrondColor:'#6E2594',padding:'3px',
                        marginRight:'3px'}} />
                           </div>
                            <MoreVertIcon style={{fontSize:'16px',color:'grey'}}/>
                       </div>
                   </div>
                </div>
               ))}
            </div>
        </div>
    );
}

export default Homepage;
