import axios from "axios";
require('dotenv').config();
const current_url = process.env.NEXT_PUBLIC_CURRENT_API_LINK;

const FETCH_ROOM_REQUESTED="FETCH_ROOM_REQUESTED";
const FETCH_ROOM_SUCCEEDED="FETCH_ROOM_SUCCEEDED";
const FETCH_ROOM_FAILED="FETCH_ROOM_FAILED";

const ROOM_ORDER="ROOM_ORDER";
const ROOM_SELL="ROOM_SELL";
const ROOM_COLOR_SETTER="ROOM_COLOR_SET";
const ROOM_IMAGE_SETTER="ROOM_IMAGE_SET";

const initialRoomState = {
  item: {},
  isLoading: false,
  erorr: "",

  // Cart
  cart: {
    cartList: [],
  },

  // Current state will hanlded in cart
  currentColor: "",
  currentImg: "",
  currentColor: "",
  currentNumber: 1,
}


function fetchRoom(id) {
  return async function(dispatch) {
    dispatch({type: FETCH_ROOM_REQUESTED});
    try {
      const res = axios.get(`${current_url}/api/products/${id}`);
      dispatch({type: FETCH_ROOM_SUCCEEDED, payload: (await res).data});
    } catch (error) {
      dispatch({type: FETCH_ROOM_FAILED, payload: error});
    }
  }
}


function orderRoom() {
  return {
    type: ROOM_ORDER,
  }
}

function sellRoom() {
  return {
    type: ROOM_SELL,
  }
}


function coloringRoom(payload) {
  return {
    type: ROOM_COLOR_SETTER,
    payload,
  }
}

function imaginedRoom(index) {
  return {
    type: ROOM_IMAGE_SETTER,
    payload: index,
  }
}



export default function roomReducer(state=initialRoomState, action) {
  switch (action.type) {
    case FETCH_ROOM_REQUESTED:
      return {
        ...state,
        currentImg: "",
        isLoading: true,
        error: null   
      };
    case FETCH_ROOM_SUCCEEDED:
      return {
        ...state,
        item: action.payload,
        currentImg: action.payload.image,
        currentColor: action.payload.colors[0],
        currentNumber: 1,
        isLoading: false,
        error: null
      };
    case FETCH_ROOM_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };


    case ROOM_ORDER:
      return {
        ...state,
        currentNumber: state.currentNumber +1,
      };
    case ROOM_SELL:
      if (state.currentNumber < 2) return state;
      return {
        ...state,
        currentNumber: state.currentNumber -1,
      };

    case ROOM_COLOR_SETTER:
      return {
        ...state,
        currentColor: action.payload,

      };
    case ROOM_IMAGE_SETTER:
      return {
        ...state,
        currentImg: action.payload > 0 ? state.item.images[action.payload-1] : state.item.image
      };

    default:
      return state;
  }
}


export const roomActions = {
  fetchRoom,
  orderRoom,
  sellRoom,
  coloringRoom,
  imaginedRoom,
}