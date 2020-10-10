import { cartType } from "./cart.types";

export const cartActionToggle = () => ({
  type: cartType.ToggleCart,
});


export const addToCart =(item)=>({
type:cartType.AddToCart,
payload:item
})


