
import React from 'react'
import '../Img/ImgCarrito.css'
import imgcarrito from '../Img/ImgCarrito.png'

const CartWidget = () => {
    return (
        <div>
            <img src={imgcarrito} className="cartWidget" alt="cart" />
        </div>
        
    )
}

export default CartWidget