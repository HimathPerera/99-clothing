import React from "react";
import { ReactComponent as ShoppingBag } from "../../assests/shoppingBag.svg";

import { connect } from "react-redux";
import cartActionToggle from "../../redux/cart/cart.action";

import "./cart-icon.styles.scss";

const CartIcon = ({ cartActionToggle }) => {
  return (
    <div className="cart-icon" onClick={cartActionToggle}>
      <ShoppingBag className="shopping-bag" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  cartActionToggle: () => dispatch(cartActionToggle()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
