import React, { useEffect, useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { checkoutCartThunk, deleteProductThunk, getCartProductsThunk } from '../store/slices/cart.slice';

const Cart = ({show,handleClose}) => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCartProductsThunk())
    },[])
    const cartProducts = useSelector (state => state.cartProducts)


    // ********************** Sino hay productos en el carrito== error 404. 
    // (data :  message : "Cart not found" status : "fail")
  
    return (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
               {
                cartProducts.map(cartProduct => (
                    <li key={cartProduct.id}>
                        <h3>Product: </h3>{cartProduct.title} 
                        {/* <img src={cartProduct.} alt="" /> */}
                        <h3>Quantity: </h3>{cartProduct.productsInCart.quantity} 
                        {/* <h3>Quantity: </h3> */}
                        {/* <input type="number" placeholder={cartProduct.productsInCart.quantity}  /> */}
                        
                        <br />

                        <button
                        onClick={() => dispatch(deleteProductThunk(cartProduct.id))}
                        // onClick={() => alert(cartProduct.productsInCart.id)}
                        >
                            Delete</button> 
                        <hr /><br />
                    </li> 
                ))
               }
               <Button className='checkout' 
               onClick={() => dispatch(checkoutCartThunk())}>
                CheckOut
                </Button>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default Cart;