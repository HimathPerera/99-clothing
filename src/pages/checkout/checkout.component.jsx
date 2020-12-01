import React from "react";

import { connect } from "react-redux";
import {
  selectCartItem,
  selectCartItemTotal,
} from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeButton from "../../components/stripe-button/stripe-button.component";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((items) => (
      <CheckoutItem key={items.id} item={items} />
    ))}
    <span className="total">TOTAL:${total}</span>

    <StripeButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem,
  total: selectCartItemTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
