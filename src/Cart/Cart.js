import React from 'react';
import CartCard from './CartCard';
import './Cart.css';

const Cart = ({cart, price}) => {
    return ( 
        <>
            <h1 style={{color: "#917164", fontSize: "10rem", textAlign: "center"}}>My Cart</h1>
            <div className="cart-list" >
                {
                    cart.map(item => <CartCard item={item} key={item.product.id}/>)
                }
                <div className="total-price">Total Cart Value: ${price}</div>
            </div>
        </>
     );
}
 
export default Cart;