import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablKey =
    "pk_test_51HsAcdBJekxbNiZpv9N26EJ3RcUQX5zTlF6GDLKbrBnNxKHmGecapuVmpYDYXJNNlmgIzAsUmENrn1bBzi0Iyy7W00CRm92vNQ";

  const onToken = (token) => {
    console.log("token :", token);
    alert("payment sucsess");
  };

  return (
    <StripeCheckout
      token={onToken}
      amount={priceForStripe}
      shippingAddress
      billingAddress
      name="99 clothing"
      label="Pay With Card"
      description={`total price is $${price} `}
      stripeKey={publishablKey}
      panelLabel="Pay Now"
    />
  );
};

export default StripeButton;
