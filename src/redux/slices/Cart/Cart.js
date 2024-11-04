const CART_LIST_SETTER = "CART_LIST_SETTER";
const CART_ADD_TO = "CART_ADD_TO";
const CART_CLEAR = "CART_CLEAR";
const CART_ROOM_SELL = "CART_ROOM_SELL";
const CART_ROOM_ORDER = "CART_ROOM_ORDER";
const CART_ROOM_REMOVE = "CART_ROOM_REMOVE";

const initialCartState = {
  cartList: [],
};

function cartListSetter(list) {
  return {
    type: CART_LIST_SETTER,
    payload: list,
  };
}

function addToCartSetter(item) {
  return {
    type: CART_ADD_TO,
    payload: item,
  };
}

function clearCartSetter() {
  return {
    type: CART_CLEAR,
  };
}

// Index is great in find and search than id which takes O(n);
function orderRoomCartSetter(index) {
  return {
    type: CART_ROOM_ORDER,
    payload: index,
  };
}

function sellRommCartSetter(index) {
  return {
    type: CART_ROOM_SELL,
    payload: index,
  };
}

function removeRoomCartSetter(id) {
  return {
    type: CART_ROOM_REMOVE,
    payload: id,
  };
}

export default function cartReducer(state = initialCartState, action) {
  switch (action.type) {
    case CART_LIST_SETTER:
      return {
        ...state,
        cartList: action.payload,
      };
    case CART_ADD_TO:
      let newCartList;
      if (
        state.cartList.find(
          (i) => i.id == action.payload.id && i.color === action.payload.color
        )
      ) {
        newCartList = state.cartList.map((i) => {
          if (
            state.cartList.find(
              (i) =>
                i.id == action.payload.id && i.color === action.payload.color
            )
          ) {
            i.count += action.payload.count;
          }
          return i;
        });
      } else {
        newCartList = [action.payload, ...state.cartList];
      }
      return {
        ...state,
        cartList: newCartList,
      };

    case CART_CLEAR:
      return {
        ...state,
        cartList: [],
      };

    case CART_ROOM_SELL:
      // Run before cloning, saving some unneeded operation :DD;
      if (state.cartList[action.payload].count < 2) {
        return state;
      }

      // Deep clone doesn't work (structuredClone) - Since V17;
      let newCartRoomSellList = state.cartList.map((i) => ({ ...i }));
      newCartRoomSellList[action.payload].count -= 1;
      return {
        ...state,
        cartList: newCartRoomSellList,
      };

    case CART_ROOM_ORDER:
      // Deep clone doesn't work (structuredClone) - Since V17;
      let newCartRoomOrderList = state.cartList.map((i) => ({ ...i }));
      newCartRoomOrderList[action.payload].count += 1;
      return {
        ...state,
        cartList: newCartRoomOrderList,
      };

    case CART_ROOM_REMOVE:
      return {
        ...state,
        cartList: state.cartList.filter((item, i) => item.id != action.payload),
      };

    default:
      return state;
  }
}

export const cartActions = {
  cartListSetter,
  addToCartSetter,
  clearCartSetter,
  orderRoomCartSetter,
  sellRommCartSetter,
  removeRoomCartSetter,
};
