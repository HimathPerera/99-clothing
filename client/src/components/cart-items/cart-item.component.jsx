import React from 'react'

import './cart-item.style.scss'


const CartItem =({item : {name ,price ,quantity ,imageUrl}})=>(
    <div className="container">
    <img className='image' src={imageUrl} alt="item"/>
    <div className="details">
     <span className='name'>{name}</span>
     <span className="price">{quantity} x ${price}</span>
    </div>
    </div>
)

export default  CartItem