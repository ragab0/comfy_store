const ROOM_ORDER="ROOM_ORDER";
const ROOM_SELL="ROOM_SELL";
const ROOM_COLOR_SETTER="ROOM_COLOR_SET";
const ROOM_IMAGE_SETTER="ROOM_IMAGE_SET";

const initialProductState = {

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

function roomColorSetter() {
  return {
    type: ROOM_COLOR_SETTER,
  }
}

function roomColorSetter() {
  return {
    type: ROOM_IMAGE_SETTER,
  }
}


export default function productReducer(state=initialProductState, action) {
  switch (action.type) {
    case "value":
      return "";
    default:
      return state;
  }
}