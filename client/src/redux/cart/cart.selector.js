import { createSelector } from 'reselect'

const selectCart =state=>state.cart

export const selectCartItem = createSelector([selectCart ], cart => cart.cartItems)

export const selectCartItemCount = createSelector([selectCartItem] ,cartItems=>cartItems.reduce((accumuladedQuantity, cartItems)=>{
    return accumuladedQuantity+cartItems.quantity
  },0) )


export const selectCartItemTotal = createSelector([selectCartItem] ,cartItems=>cartItems.reduce((accumuladedQuantity, cartItems)=>{
    return accumuladedQuantity+cartItems.quantity*cartItems.price
  },0) )


export const selectHidden = createSelector([selectCart],cart=>cart.hidden)  