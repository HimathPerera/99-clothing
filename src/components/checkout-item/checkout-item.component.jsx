import React from "react";

import {connect} from 'react-redux'
import {removeItem , removeFromCart , addToCart} from '../../redux/cart/cart.action'

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item ,removeItem ,removeFromCart ,addToCart}) => {
  const { name, price, quantity, imageUrl } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img className="image" src={imageUrl} alt="item" />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
      <span className='arrow' onClick={()=>{removeFromCart(item)}}>&#10094;</span>
        <span className='quantity-value'>{quantity}</span>
        <span className='arrow' onClick={()=>{addToCart(item)}}>&#10095;</span>
        </span>
      <span className="price">${price}</span>
      <span className="remove-button" onClick={()=>{removeItem(item)}}>&#10005;</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch)=>({
removeItem : item => dispatch(removeItem(item)),
removeFromCart : item => dispatch(removeFromCart(item)),
addToCart :item => dispatch(addToCart(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);
