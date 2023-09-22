import axios from "axios";
require('dotenv').config();
const current_url = process.env.NEXT_PUBLIC_CURRENT_API_LINK;

const FETCH_BASIC_DATA_REQUESTED="FETCH_ROOM_REQUESTED";
const FETCH_BASIC_DATA__SUCCEEDED="FETCH_BASIC_DATA__SUCCEEDED";
const FETCH_BASIC_DATA__FAILED="FETCH_BASIC_DATA__FAILED";

const SET_SEARCH="SET_SEARCH";
const SET_CATEGORY="SET_CATEGORY";
const SET_COMPANY="SET_COMPANY";
const SET_COLOR="SET_COLOR";
const SET_PRICE="SET_RPICE";
const SET_FREE_SHIPPING="SET_FREE_SHIPPING";
const SET_CLEAR="SET_MAX_RPICE";


const initialRightFilterState = {
  info: {}, // clrs, catgs, comps, maxprice,
  isLoading: false,
  error: null,

  search: "",
  category: "all",
  company: "all",
  color: "all",
  price: 0,
  isFreeShipping: false,
}


function fetchBasicData() {
  return async function(dispatch) {
    dispatch({type: FETCH_BASIC_DATA_REQUESTED});
    try {
      const res = axios.get(`${current_url}/api/info`);
      dispatch({type: FETCH_BASIC_DATA__SUCCEEDED, payload: (await res).data});
    } catch (error) {
      dispatch({type: FETCH_BASIC_DATA__FAILED, payload: error});
    }
  }
}

function searchSetter(name) {
  return {
    type: SET_SEARCH,
    payload: name,
  }
}

function categorySetter(val) {
  return {
    type: SET_CATEGORY,
    payload: val,
  }
}

function companySetter(val) {
  return {
    type: SET_COMPANY,
    payload: val,
  }
}

function colorSetter(val) {
  return {
    type: SET_COLOR,
    payload: val,
  }
}

function priceSetter(val) {
  return {
    type: SET_PRICE,
    payload: val
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
    case FETCH_BASIC_DATA_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null   
      };
    case FETCH_BASIC_DATA__SUCCEEDED:
      return {
        ...state,
        info: action.payload,
        price: action.payload.maxPrice,
        isLoading: false,
        error: null
      };
    case FETCH_BASIC_DATA__FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };



    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      }
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      }

    case SET_COMPANY:
      return {
        ...state,
        company: action.payload,
      }

    case SET_COLOR:
      return {
        ...state,
        color: action.payload,
      }

    case SET_PRICE:
      return {
        ...state,
        price: action.payload,
      }

    case SET_FREE_SHIPPING:
      return {
        ...state,
        isFreeShipping: !state.isFreeShipping,
      }

    case SET_CLEAR:
      
      const {maxPrice} = state.info
      return {
        ...state,
        search: "",
        category: "all",
        company: "all",
        color: "all",
        price: maxPrice,
        isFreeShipping: false,
      }


    default:
      return state
  }
}


export const rightFilterActions = {
  fetchBasicData,
  searchSetter,
  categorySetter,
  companySetter,
  colorSetter,
  priceSetter,
  freeShippingSetter,
  clearSetter,
}