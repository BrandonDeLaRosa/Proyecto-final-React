import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { purchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {

    const dispatch = useDispatch()
    const purchases = useSelector(state => state.purchases)

    useEffect(()=> {
        dispatch(purchasesThunk())
    },[])
    return (
        <div>
            <h1>Purchases Page</h1>
            <ul>
                {
                    purchases.map(purchase => (
                        <li key={purchase.id}>
                            {purchase.cart.products.map(product => (
                                <li>
                                    <Link to={`/products/${product .id}`}>
                                    <h3><b>Product: </b>{product.title}</h3>
                                    </Link>
                                    <h3><b>Price: </b>${product.price}</h3>
                                    <h3><b>Purchase Date: </b>{product.createdAt}</h3> 
                                </li>
                            ))}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Purchases;