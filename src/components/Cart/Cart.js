import React from 'react'

function Cart(props) {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }

    let taxt = total / 10;
        return (
            <div>
                <h4>Cart Summury: {cart.length}</h4>
                <p><small>shipping : ${shipping}</small></p>
                <p><small>Taxt: {taxt}</small></p>
                <p>Total Price: ${total + shipping + taxt}</p>
            </div>
        )
}

export default Cart
