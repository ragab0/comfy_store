import axios from "axios";
require('dotenv').config();
const current_url = process.env.NEXT_PUBLIC_CURRENT_API_LINK;
const SET_CURRENT_ROOMS="SET_CURRENT_ROOMS";

const FETCH_ROOMS_REQUESTED="FETCH_ROOMS_REQUESTED";
const FETCH_ROOMS_SUCCEEDED="FETCH_ROOMS_SUCCEEDED";
const FETCH_ROOMS_FAILED="FETCH_ROOMS_FAILED";

const FETCH_ROOMS_FEATURED_REQUESTED="FETCH_ROOMS_FEATURED_REQUESTED";
const FETCH_ROOMS_FEATURED_SUCCEEDED="FETCH_ROOMS_FEATURED_SUCCEEDED";
const FETCH_ROOMS_FEATURED_FAILED="FETCH_ROOMS_FEATURED_FAILED";



const initialRoomsState = {
  rooms: {
    list: [],
    currentList: [],
    isLoading: false,
    erorr: "",
  },
  roomsFeatured: {
    list: [],
    isLoading: false,
    erorr: "",
  }
}


function fetchRooms() {
  return async function(dispatch) {
    dispatch({type: FETCH_ROOMS_REQUESTED});
    try {
      const res = axios.get(`${current_url}/api/products`);
      dispatch({type: FETCH_ROOMS_SUCCEEDED, payload: (await res).data});
    } catch (error) {
      dispatch({type: FETCH_ROOMS_FAILED, payload: error});
    }
  }
}



function fetchRoomsFeatured() {
  return async function(dispatch) {
    dispatch({type: FETCH_ROOMS_FEATURED_REQUESTED});
    try {
      const res = axios.get(`${current_url}/api/products/featured`);
      dispatch({type: FETCH_ROOMS_FEATURED_SUCCEEDED, payload: (await res).data});
    } catch (error) {
      dispatch({type: FETCH_ROOMS_FEATURED_FAILED, payload: error});
    }
  }
}


function currentListSetter(lista) {
  return {
    type: SET_CURRENT_ROOMS,
    payload: lista,
  }
}



export default function roomsReducer(state=initialRoomsState, action) {
  switch (action.type) {
    // 01
    case FETCH_ROOMS_REQUESTED:
      return {
        ...state,
        rooms: {
          ...state.rooms,
          isLoading: true,
          error: null,
        }
      }

    case FETCH_ROOMS_SUCCEEDED:
      return {
        ...state,
        rooms: {
          list: action.payload,
          isLoading: false,
          error: null,
        }
      }

    case FETCH_ROOMS_FAILED:
      return {
        ...state,
        rooms: {
          isLoading: false,
          error: action.payload,
        }
      }

    case SET_CURRENT_ROOMS:
      return {
        ...state,
        rooms: {
          ...state.rooms,
          currentList: action.payload,
        }
      }
    
    // 02
    case FETCH_ROOMS_FEATURED_REQUESTED:
      return {
        ...state,
        roomsFeatured: {
          ...state.roomsFeatured,
          isLoading: true,
          error: null,
        }
      }

    case FETCH_ROOMS_FEATURED_SUCCEEDED:
      return {
        ...state,
        roomsFeatured: {
          ...state.roomsFeatured,
          list: action.payload,
          isLoading: false,
          error: null,
        }
      }

    case FETCH_ROOMS_FEATURED_FAILED:
      return {
        ...state,
        roomsFeatured: {
          ...state.roomsFeatured,
          isLoading: false,
          error: action.payload,
        }
      }


    default:
      return state;
    }
}


export const roomsActions = {
  fetchRooms,
  fetchRoomsFeatured,
  currentListSetter,
}