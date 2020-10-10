import { cartType } from "./cart.types";
import { addItemToCart } from './cart.util'

const INITIAL_STATE = {
  hidden: true,
  cartItems:[]
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartType.ToggleCart:
      return {
        ...state,
        hidden: !state.hidden,
      };
  case cartType.AddToCart :
    return{
      ...state,
      cartItems :addItemToCart(state.cartItems,action.payload)
    }
    default:
      return state;
  }
};

export default cartReducer;
