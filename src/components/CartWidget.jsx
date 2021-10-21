
import React from 'react'
import '../ImgCarrito.css'
import imgcarrito from '../ImgCarrito.png';

const CartWidget = () => {
    return (
        <div>
            <img src={imgcarrito} class="cartWidget" alt="cart" />
        </div>
        
    )
}

export default CartWidget