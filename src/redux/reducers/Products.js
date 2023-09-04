const GET_API_BASIC_INFO="GET_API_BASIC_INFO"

const initialProductsState = {

}


function apiBasicInfoGetter() {
  return {
    type: GET_API_BASIC_INFO
  }
}


export default function productsReducer(state=initialProductsState, action) {
  switch (action.type) {
    case GET_API_BASIC_INFO:

      return "";
    default:
      return state;
  }
}