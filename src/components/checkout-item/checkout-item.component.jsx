import React from 'react'

import './checkout-item.styles.scss'


const CheckoutItem =({item : {name ,price ,quantity ,imageUrl}})=>(
    <div className="checkout-item">
    <div className="image-container">
    <img className='image' src={imageUrl} alt="item"/>
    </div>

     <span className='name'>{name}</span>
     <span className="quantity">{quantity}</span>
     <span className="price">${price}</span>
     <span className="remove-button">&#10005;</span>
    </div>
)

export default  CheckoutItem