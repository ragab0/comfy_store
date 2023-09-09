const TOP_SET_VIEW="TOP_SET_VIEW";
const TOP_SET_SORT_OPTIONS="TOP_SET_SORT_OPTIONS";

const initialTopFilterState = {

}


function topViewSetter() {
  return {
    type: TOP_SET_VIEW,
  }
}

function topSortOptionsSetter() {
  return {
    type: TOP_SET_SORT_OPTIONS,
  }
}


export default function topFilterReducer(state=initialTopFilterState, action) {
  switch (action.type) {
    case "value":
      return "";
    default:
      return state;
  }
}


export const topFilterActionsCreators = {
  topViewSetter,
  topSortOptionsSetter,
}