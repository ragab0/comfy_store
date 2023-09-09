const FETCH_API_REQUESTED="FETCH_API";
const FETCH_API_SUCCEEDED="FETCH_API";
const FETCH_API_FAILED="FETCH_API";

const initialProductsState = {
  products: [],
  isLoading: false,
  erorr: "",
}


function fetchApi() {
  return function(dispatch) {
    dispatch({type: FETCH_API_REQUESTED});
    try {
      dispatch({type: FETCH_API_SUCCEEDED});
    } catch (error) {
      dispatch({type: FETCH_API_FAILED});
    }
  }
}


export default function productsReducer(state=initialProductsState, action) {
  switch (action.type) {
    case FETCH_API_REQUESTED:
      return "";

    case FETCH_API_SUCCEEDED:
      return "";

    case FETCH_API_FAILED:
      return "";

    default:
      return state;
  }
}


export const productsActionsCreators = {
  fetchApi,
}