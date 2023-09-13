const SET_VIEW="SET_VIEW";
const SET_SORT="SET_SORT";

const initialTopFilterState = {
  view: "squares",
  sort: "p0",
}


function viewSetter(val) {
  return {
    type: SET_VIEW,
    payload: val
  }
}

function sortSetter(val) {
  return {
    type: SET_SORT,
    payload: val
  }
}


export default function topFilterReducer(state=initialTopFilterState, action) {
  switch (action.type) {
    case SET_VIEW:
      return {
        ...state,
        view: action.payload,
      };

    case SET_SORT:
      const v = action.payload;
      if (v === "p0") {

      } else if (v === "p1") {

      } else if (v === "az") {

      } else if (v === "za") {

      }

      return {
        ...state,
        sort: v,
      };

    default:
      return state;
  }
}


export const topFilterActions = {
  viewSetter,
  sortSetter,
}