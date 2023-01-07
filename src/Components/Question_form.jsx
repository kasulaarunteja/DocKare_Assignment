import React, { useState, useEffect } from "react";
import "./Question_form.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import { AccordionDetails,  IconButton,  Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import SubjectIcon from '@mui/icons-material/Subject';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import MenuItem from '@mui/material/MenuItem';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import ShortTextIcon from '@mui/icons-material/ShortText';
import CloseIcon from '@mui/icons-material/Close';
import Select from '@mui/material/Select';




const QuestionForm = () => {
  const [question, setQuestion] = useState([
    {
      questionText: "wherer is the captial city of karnataka ?",
      questionType: "radio",
      option: [
        { optionText: "Bengaluru" },
        { optionText: "Belgavi" },
        { optionText: "Hubli" },
        { optionText: "Mandya" },
      ],
      open: true,
      required: false,
    },
  ]);

  function questionUI() {
    return question.map((ques, i) => (
      <Accordion
        expanded={ques.open}
        className={`${question[i].open ? "add border" : ""}`}
      >
        <AccordionSummary
          aria-controls="panelia_content"
          id="panelia_header"
          elevation={1}
          style={{ width: "100%" }}
        >
          {question[i].open ? (
            <div className="saved_question">
                <Typography
                style={{
                    fontsize: "15px",
                    fontweight: "400",
                    letterSpacing: ".1px",
                    lineHeight: "24px",
                    paddingBottom: "8px",
                  }}
                  >
                    {i+1}.{question[i].questionText}
                </Typography>
                  {ques.option.map((op, j) => (
                    <div key={j} >
                        <div style={{ display: "flex" }}>
                            <FormControlLabel
                              style={{ marginLeft: "5px", marginBottom: "5px" }}
                              disabled
                              control={
                                <input
                                  type={ques.questionType}
                                  color="primary"
                                  style={{ marginRight: "3px" }}
                                  required={ques.type}
                                />
                              }
                            label={
                        <Typography
                          style={{
                            fontFamily: "Roboto, Arial, sans-serif",
                            fontsize: "13px",
                            fontweight: "400",
                            letterSpacing: ".2px",
                            lineHeight: "20px",
                            color: "#202124",
                          }}
                        >
                          {ques.option[j].optionText}
                        </Typography>
                      }
                      />
                     </div>
                    </div>
                  ))}
            </div>
          ):""}   
        </AccordionSummary>

        <div className="question_boxes">
            <AccordionDetails className="add_question">
                <div className="add_question_top">
                  <input type='text' className="questons" placeholder="Question"
                    value={ques.questionText}
                  />
                    <CropOriginalIcon  style={{color:"#5f6368"}}/>
                    <Select className="select" style={{color:'#5f6368', fontsize:'13px'}}>
                        <MenuItem id='text' value='Text'><SubjectIcon style={{marginRight:'10px'}}/> Paragraph</MenuItem> 
                        <MenuItem id='checkbox' value='checkbox'> <CheckBoxIcon style={{marginRight:'10px' , color:'#70757a'}} checked/>CheckBox</MenuItem>
                        <MenuItem id='radio' value='Radio'> <RadioButtonUncheckedIcon style={{marginRight:'10px',color:'#70757a'}} Checked/>Mutiple Choices</MenuItem>
                    </Select>
                </div>
                 {ques.option.map((op, j) => (
                    <div className="Add_question_body" key={j}>
                        {
                           (ques.questionType != 'text') ?
                           <input type={ques.questionType} style={{marginRight:'10px'}}/>:
                           <ShortTextIcon style={{marginRight:'10px'}}/>
                        }

                        <div>
                            <input type="text" className="text_input" placeholder='option'
                             value={ques.option[j].optionText}
                            />
                        </div>
                        <CropOriginalIcon style={{color:"#5f6368"}} />

                        <IconButton aria-label="delete">
                              <CloseIcon/>
                        </IconButton>
                    </div>
                 ))}
            </AccordionDetails>
        </div>
      </Accordion>
    ));
  }

  return (
    <div>
      <div className="question_form">
        <br />
        <div className="section">
          <div className="question_title_section">
            <div className="question_form_top">
              <input
                type="text"
                className="question_form_top_name"
                placeholder="untittled Form"
              />
              <input
                type="text"
                className="question_form_top_dec"
                placeholder="form description"
              />
            </div>
          </div>
          {questionUI()}
        </div>
      </div>
    </div>
  );
};

export default QuestionForm;
