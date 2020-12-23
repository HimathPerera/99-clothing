import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablKey =
    "pk_test_51HsAcdBJekxbNiZpv9N26EJ3RcUQX5zTlF6GDLKbrBnNxKHmGecapuVmpYDYXJNNlmgIzAsUmENrn1bBzi0Iyy7W00CRm92vNQ";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        alert("payment successful");
      })
      .catch((err) => {
        console.log("payment error", JSON.parse(err));
        alert("please make sure you use a valid credit card");
      });
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
