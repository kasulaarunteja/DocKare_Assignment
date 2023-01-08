import {
    SET_QUESTION,
    SET_DOC_DEC,
    SET_DOC_NAME,
    CHANGE_TYPE,
  } from "./actionType";


  const init = {
    questions:[{
        questionText:"Question",
        questionType:'radio',
        options:[{optionText:'Option 1'}],
        open:true,
        required:false
    }],
    questionType:'radio',
    doc_name:'Untitled form',
    doc_dec:'add the description'
  }


  export const reducer = (state=init, action) => {
           switch(action.type){
            case SET_QUESTION:
                return {
                    ...state, 
                    questions:action.questions,
                };
            case CHANGE_TYPE:
                return {
                    ...state, questionType:action.questionType,
                };
            case SET_DOC_DEC :
                return{
                    ...state, 
                    doc_dec:action.doc_dec,
                };
             case SET_DOC_NAME :
                return{
                    ...state, 
                    doc_dec:action.doc_name,
                };
                default:
                    return state;
           
         }
  }