import { cartType } from "./cart.types";

export const cartActionToggle = () => ({
  type: cartType.ToggleCart,
});


export const addToCart =(item)=>({
type:cartType.AddToCart,
payload:item
})
export const removeFromCart =(item)=>({
type:cartType.removeFromCart,
payload:item
})

export const removeItem =(item) =>({
  type:cartType.removeItem,
  payload:item
})


