import {
  SET_QUESTION,
  SET_DOC_DEC,
  SET_DOC_NAME,
  CHANGE_TYPE,
} from './actionType'

export const set_question = (payload) => {
  return {
    type: SET_QUESTION,
    payload
  }
}

export const change_type = (payload) => {
  return {
    type: CHANGE_TYPE,
    payload
  }
}

export const set_doc_dec = (payload) => {
  return {
    type: SET_DOC_DEC,
    payload
  }
}

export const set_doc_name = (payload) => {
  return {
    type: SET_DOC_NAME,
    payload
  }
}
