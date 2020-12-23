export const addItemToCart =(cartItems,cartItemsToAdd)=>{

//    finding existing items in the cart
   const existingItems = cartItems.find(cartItem => cartItem.id === cartItemsToAdd.id)

   if(existingItems){
   return cartItems.map(cartItem => cartItem.id===cartItemsToAdd.id ?{...cartItem,quantity : cartItem.quantity+1}:cartItem)
   }

   return [...cartItems, {...cartItemsToAdd,quantity :1}]
}


export const removeItemFromCart = (cartItems,cartItemsToRemove)=>{
  
const existingItems = cartItems.find(cartItem => cartItem.id === cartItemsToRemove.id)

if(existingItems.quantity===1){
  return cartItems.filter(Item => Item.id !== cartItemsToRemove.id)
}
return cartItems.map(cartItem => cartItem.id === cartItemsToRemove.id ? {...cartItem,quantity : cartItem.quantity-1} : cartItem)
}