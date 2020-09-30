import React from 'react'

const CartPage = () => {

    const placeOrder = () => {
        // check if user is authenticated
        // redirect to login page if not authenticated
    }

    return(
        <div>
            <h5>Cart Page</h5>
            <button onClick={placeOrder} >Place Order</button>
        </div>
    )
}

export default CartPage 