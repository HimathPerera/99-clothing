import React from "react";
import {Link} from 'react-router-dom'
import Button from "../custom-button/custom-button.component";
import CartItem from '../cart-items/cart-item.component'

import {withRouter} from 'react-router-dom'

import {connect } from 'react-redux'

import {selectCartItem} from '../../redux/cart/cart.selector'
import {cartActionToggle} from '../../redux/cart/cart.action'
import {createStructuredSelector } from 'reselect'

import "./cart-dropdown.styles.scss";

const CartDropDown = ({cartItems , history ,dispatch}) =>
{
  return(
    <div className="cart-dropdown">
      <div className="cart-items" >
        {(cartItems.length) ? cartItems.map(item =>(<CartItem key={item.id} item={item}/>)) : (<div className='empty-items'><div className='cart-empty-message'>Your Cart Is Empty<br/><Link to='/shop' className='go-shopping'>Go Shopping</Link> </div></div>)}       
      </div>
      <Button onClick ={()=>
      {history.push('/checkout');
      dispatch(cartActionToggle())
      }}>GO TO CHECKOUT</Button>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
cartItems:selectCartItem,
})

export default withRouter(connect(mapStateToProps)(CartDropDown))
