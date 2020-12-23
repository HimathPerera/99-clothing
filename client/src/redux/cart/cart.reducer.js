import { cartType } from "./cart.types";
import { addItemToCart,removeItemFromCart } from './cart.util'

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
  case cartType.removeFromCart :
    return{
      ...state,
      cartItems :removeItemFromCart(state.cartItems,action.payload)
    }

  case cartType.removeItem:
    return{
      ...state,
      cartItems :state.cartItems.filter(Cartitem =>Cartitem.id !== action.payload.id ) 
    }  
    default:
      return state;
  }
};

export default cartReducer;
