import React, { useState } from "react";
import "./Question_form.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import { AccordionDetails, IconButton, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import SubjectIcon from "@mui/icons-material/Subject";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import MenuItem from "@mui/material/MenuItem";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import ShortTextIcon from "@mui/icons-material/ShortText";
import CloseIcon from "@mui/icons-material/Close";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import Switch from "@mui/material/Switch";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import { FunctionsOutlined } from "@mui/icons-material";

const QuestionForm = () => {
  const [question, setQuestion] = useState([
    {
      questionText: "Question",
      questionType: "radio",
      options: [
        // { optionText: "Bengaluru" },
        // { optionText: "Belgavi" },
        // { optionText: "Hubli" },
        // { optionText: "Mandya" },
      ],
      open: true,
      answerKey:"",
      points:0,
      required: false,
    },
  ]);

  function changeQuestion(text, i) {
    let newQuestion = [...question];
    newQuestion[i].questionText = text;
    setQuestion(newQuestion);
    console.log(newQuestion);
  }

  function addQuestionType(i, type) {
    let qsti = [...question];
    console.log(type);
    qsti[i].questionType = type;
    setQuestion(qsti);
  }

  function changeOptionVaule(text, i, j) {
    let optionsQuestion = [...question];
    optionsQuestion[i].options[j].optionText = text;
    setQuestion(optionsQuestion);
    console.log(optionsQuestion);
  }

  function removeOption(i, j) {
    let Removeoption = [...question];
    if (Removeoption[i].options.length > 1) {
      Removeoption[i].options.splice(j, 1);
      setQuestion(Removeoption);
      console.log(i + "__" + j);
    }
  }

  function addOption(i) {
    let optionsofquestion = [...question];
    if (optionsofquestion[i].options.length < 5) {
      optionsofquestion[i].options.push({
        optionText: "option" + (optionsofquestion[i].options.length + 1),
      });
    } else {
      console.log("max 5 options ");
    }

    setQuestion(optionsofquestion);
  }

  function copyQuestion(i) {
    expandCloseAll()
    let quess = [...question];
    let newquestions = {...quess[i]};
    setQuestion([...question, newquestions]);
  }

  function deleteQuestions(i) {
    let qts = [...question];
    if (question.length > 1) {
      qts.splice(i, 1);
    }
    setQuestion(qts);
  }

  function requiredQuestion(i) {
    let reqQuestion = [...question];
    reqQuestion[i].required = !reqQuestion[i].required;
    console.log(reqQuestion[i].required + " " + i);
    setQuestion(reqQuestion);
  }

  function addmoreQuestions() {
    expandCloseAll()
    setQuestion([
      ...question,
      {
        questionText: "Question",
        questionType: "radio",
        options: [{ optionText: "Option 1" }],
        open: true,
        required: false,
      },
    ]);
  }


  function expandCloseAll(){
    let qs = [...question];
    for(let j =0; j<qs.length; j++){
      qs[j].open = false;
    }
    setQuestion(qs)
  }

  function handleExpand(i){
    let qs = [...question];
    for(let j =0; j<qs.length; j++){
      if(i ==j){
        qs[i].open = true;
      }else{
        qs[j].open = false;
      }
      setQuestion(qs);
    }
  }

  function setOptionAnswer(ans,qno){
    let questionss = [...question];
     questionss[qno].answerKey = ans;
     setQuestion(questionss)
     console.log(qno+" "+ans)
  }
  

  function setOptionPoints(points, qno){
    let Question = [...question];
    Question[qno].points = points;
    setQuestion(Question);
    console.log(qno+""+points)
  }


  function doneAnswer(i){
    let answerofQuestion = [...question];
      answerofQuestion[i].answer = !answerofQuestion[i].answer;
      setQuestion(answerofQuestion)
  }
 
   function addAnswe(i){
    let answerofQuestion = [...question];
     answerofQuestion[i].answer = !answerofQuestion[i].answer;
     setQuestion(answerofQuestion)
   }




  function questionUI() {
    return question.map((ques, i) => (
      <Accordion
        key={i}
        expanded={question.open}
        onChange={() => {handleExpand(i)}}
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
                {i + 1}.{question[i].questionText}
              </Typography>
              {ques.options.map((op, j) => (
                <div key={j}>
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
                          {ques.options[j].optionText}
                        </Typography>
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          ) :""}
        </AccordionSummary>

        {question[i].open ? (
          <div className="question_boxes">
         
            <AccordionDetails className="add_question">
              <div className="add_question_top">
                <input
                  type="text"
                  className="questons"
                  placeholder="Question"
                  value={ques.questionText}
                  onChange={(e) => {
                    changeQuestion(e.target.value, i);
                  }}
                />
                <CropOriginalIcon style={{ color: "#5f6368" }} />
                <Select
                  className="select"
                  style={{ color: "#5f6368", fontsize: "13px" }}
                >
                  <MenuItem
                    id="text"
                    value="Text"
                    onClick={() => {
                      addQuestionType(i, "text");
                    }}
                  >
                    <SubjectIcon style={{ marginRight: "10px" }} /> Paragraph
                  </MenuItem>
                  <MenuItem
                    id="checkbox"
                    value="Checkbox"
                    onClick={() => {
                      addQuestionType(i, "checkbox");
                    }}
                  >
                    {" "}
                    <CheckBoxIcon
                      style={{ marginRight: "10px", color: "#70757a" }}
                    />
                    CheckBox
                  </MenuItem>
                  <MenuItem
                    id="radio"
                    value="Radio"
                    onClick={() => {
                      addQuestionType(i, "radio");
                    }}
                  >
                    {" "}
                    <RadioButtonUncheckedIcon
                      style={{ marginRight: "10px", color: "#70757a" }}
                    />
                    Mutiple Choices
                  </MenuItem>
                </Select>
              </div>
              {ques.options.map((op, j) => (
                <div className="Add_question_body" key={j}>
                  {ques.questionType != "text" ? (
                    <input
                      type={ques.questionType}
                      style={{ marginRight: "10px" }}
                    />
                  ) : (
                    <ShortTextIcon style={{ marginRight: "10px" }} />
                  )}

                  <div>
                    <input
                      type="text"
                      className="text_input"
                      placeholder="option"
                      value={ques.options[j].optionText}
                      onChange={(e) => {
                        changeOptionVaule(e.target.value, i, j);
                      }}
                    />
                  </div>
                  <CropOriginalIcon style={{ color: "#5f6368" }} />

                  <IconButton
                    aria-label="delete"
                    onClick={() => removeOption(i, j)}
                  >
                    <CloseIcon />
                  </IconButton>
                </div>
              ))}

              {ques.options.length < 5 ? (
                <div className="add_question_body">
                  <FormControlLabel
                    disabled
                    control={
                      ques.questionType === "text" ? (
                        <input
                          type={ques.questionType}
                          color="primary"
                          inputProps={{ "aria-label": "secondary checkbox" }}
                          style={{ marginLeft: "10px", marginRight: "10px" }}
                          disabled
                        />
                      ) : (
                        <RadioButtonUncheckedIcon
                          style={{ marginRight: "15px" }}
                        />
                      )
                    }
                    label={
                      <div>
                        <input
                          type="text"
                          className="text_input"
                          style={{ fontSize: "13px", width: "60px" }}
                          placeholder="Add other"
                        ></input>
                        <Button
                          onClick={() => {
                            addOption(i);
                          }}
                          size="small"
                          style={{
                            textTransform: "none",
                            color: "#4285f4",
                            fontSize: "13px",
                            fontWeight: "600",
                          }}
                        >
                          Add Option
                        </Button>
                      </div>
                    }
                  />
                </div>
              ):""}

              <div className="add_footer">
                <div className="add_question_bottom_left">
                  <Button
                    size="small"
                    style={{
                      textTransform: "none",
                      color: "#4285f4",
                      fontsize: "13px",
                      fontweight: "600",
                    }}
                  >
                    <OpenInNewIcon /> Answer Key
                  </Button>
                </div>
                <div className="add_question_bottom">
                  <IconButton
                    aria-label="Copy"
                    onClick={() => {
                      copyQuestion(i);
                    }}
                  >
                    <FilterNoneIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => {
                      deleteQuestions(i);
                    }}
                  >
                    <DeleteForeverOutlinedIcon />
                  </IconButton>
                  <span style={{ color: "#5f6368", fontsize: "13px" }}>
                    Required
                  </span>
                  <Switch
                    name="checkdA"
                    color="primary"
                    checked
                    onClick={() => {
                      requiredQuestion(i);
                    }}
                  ></Switch>
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                </div>
              </div>
            </AccordionDetails>
            <div className="question_edit">
              <IconButton onClick={addmoreQuestions}>
                <AddCircleOutlineIcon className="edit" />
              </IconButton>
              <OndemandVideoIcon className="edit" />
              <CropOriginalIcon className="edit" />
              <TextFieldsIcon className="edit" />
            </div>
          </div>
        ) :""}
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
