import { bindActionCreators } from "redux";

const SET_CATEGORY="SET_CATEGORY";
const SET_COMPANY="SET_COMPANY";
const SET_COLOR="SET_COLOR";
const SET_PRICE="SET_RPICE";
const SET_FREE_SHIPPING="SET_MAX_RPICE";
const SET_CLEAR="SET_MAX_RPICE";

const initialRightFilterState = {

}


function categorySetter() {
  return {
    type: SET_CATEGORY,
  }
}

function companySetter() {
  return {
    type: SET_COMPANY,
  }
}

function colorSetter() {
  return {
    type: SET_COLOR,
  }
}

function priceSetter() {
  return {
    type: SET_PRICE,
  }
}

function freeShippingSetter() {
  return {
    type: SET_FREE_SHIPPING,
  }
}

function clearSetter() {
  return {
    type: SET_CLEAR,
  }
}


export default function rightFilterReducer(state=initialRightFilterState, action) {
  switch (action.type) {
    case "value":
      break;
  
    default:
      return state
  }
}


export const rightFilterActionsCreators = {
  categorySetter,
  companySetter,
  colorSetter,
  priceSetter,
  freeShippingSetter,
  clearSetter,
}