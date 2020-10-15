import React from "react";
import { ReactComponent as ShoppingBag } from "../../assests/shoppingBag.svg";

import { connect } from "react-redux";
import {cartActionToggle} from "../../redux/cart/cart.action";

import {selectCartItemCount} from '../../redux/cart/cart.selector'
import {createStructuredSelector} from 'reselect'

import "./cart-icon.styles.scss";

const CartIcon = ({ cartActionToggle ,itemCount}) => {
  return (
    <div className="cart-icon" onClick={cartActionToggle}>
      <ShoppingBag className="shopping-bag" />
  <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps =createStructuredSelector({
itemCount :selectCartItemCount
})

const mapDispatchToProps = (dispatch) => ({
  cartActionToggle: () => dispatch(cartActionToggle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
