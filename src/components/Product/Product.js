import React from 'react'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
function Product(props) {
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" srcset="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4> <br />
                <p><small>By: {seller}</small></p>
                <p>${price}</p><br />
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button
                    onClick={() => props.handleproduct(props.product)}
                    className='main-button'
                >
                    <FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
    )
}

export default Product
