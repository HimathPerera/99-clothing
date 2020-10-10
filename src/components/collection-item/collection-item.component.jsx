import React from "react";
import Button from "../custom-button/custom-button.component";

import {connect} from "react-redux"
import { addToCart } from "../../redux/cart/cart.action"

import "./collection-item.styles.scss";

function CollectionItem({ item , addToCart}) {
  
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">${item.price}</span>
      </div>
      {/* after calling item in onclick it then passes it to the dispatch */}
      <Button inverted id="hey" onClick={()=>{addToCart(item)}}>
        Add to cart
      </Button>
    </div>
  );
}

const mapDispatchToProps =(dispatch)=>({
addToCart : (item)=> dispatch(addToCart(item))
}) 

export default connect(null,mapDispatchToProps)(CollectionItem)
