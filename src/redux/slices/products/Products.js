import axios from "axios";

const FETCH_PRODUCTS_REQUESTED="FETCH_PRODUCTS_REQUESTED";
const FETCH_API_SUCCEEDED="FETCH_API_SUCCEEDED";
const FETCH_API_FAILED="FETCH_API_FAILED";

const FETCH_PRODUCTS_FEATURED_REQUESTED="FETCH_PRODUCTS_FEATURED_REQUESTED";
const FETCH_PRODUCTS_FEATURED_SUCCEEDED="FETCH_PRODUCTS_FEATURED_SUCCEEDED";
const FETCH_PRODUCTS_FEATURED_FAILED="FETCH_PRODUCTS_FEATURED_FAILED";


const initialProductsState = {
  products: {
    productsList: [],
    isLoading: false,
    erorr: "",
  },
  featuredProducts: {
    productsFeaturedList: [],
    isLoading: false,
    erorr: "",
  }
}


function fetchProducts() {
  return async function(dispatch) {
    dispatch({type: FETCH_PRODUCTS_REQUESTED});
    try {
      const res = axios.get("http://localhost:12789/api/products/featured");
      dispatch({type: FETCH_API_SUCCEEDED, payload: (await res).data});
    } catch (error) {
      dispatch({type: FETCH_API_FAILED, payload: error});
    }
  }
}


function fetchProductsFeatured() {
  return async function(dispatch) {
    dispatch({type: FETCH_PRODUCTS_REQUESTED});
    try {
      const res = axios.get("http://localhost:12789/api/products/featured");
      dispatch({type: FETCH_API_SUCCEEDED, payload: (await res).data});
    } catch (error) {
      dispatch({type: FETCH_API_FAILED, payload: error});
    }
  }
}


export default function productsReducer(state=initialProductsState, action) {
  switch (action.type) {
    // 01
    case FETCH_PRODUCTS_REQUESTED:
      return {
        ...state,
        products: {
          ...state.products,
          isLoading: true,
          error: null,
        }
      }

    case FETCH_API_SUCCEEDED:
      return {
        ...state,
        products: {
          ...state.products,
          productsList: action.payload,
          isLoading: false,
          error: null,
        }
      }

    case FETCH_API_FAILED:
      return {
        ...state,
        products: {
          ...state.products,
          isLoading: false,
          error: action.payload,
        }
      }


    // 02
    case FETCH_PRODUCTS_FEATURED_REQUESTED:
      return {
        ...state,
        productsFeatured: {
          ...state.productsFeatured,
          isLoading: true,
          error: null,
        }
      }

    case FETCH_PRODUCTS_FEATURED_SUCCEEDED:
      return {
        ...state,
        productsFeatured: {
          ...state.productsFeatured,
          productsFeaturedList: action.payload,
          isLoading: false,
          error: null,
        }
      }

    case FETCH_PRODUCTS_FEATURED_FAILED:
      return {
        ...state,
        productsFeatured: {
          ...state.productsFeatured,
          isLoading: false,
          error: action.payload,
        }
      }

    default:
      return state;
  }
}


export const productsActions = {
  fetchProducts,
  fetchProductsFeatured
}