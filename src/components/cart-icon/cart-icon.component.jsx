import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingBag } from "../../assests/shoppingBag.svg";

const CartIcon = () => {
  return (
    <div className="cart-icon">
      <ShoppingBag className="shopping-bag" />
      <span className="item-count">0</span>
    </div>
  );
};
export default CartIcon;
