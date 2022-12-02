import React, { useEffect, useState } from 'react';
import { Button, Col, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addCartThunk } from '../store/slices/cart.slice';
import { getProductsThunk } from '../store/slices/products.slice';

const Products = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsThunk())
    },[])
    const[userSearch, setUserSearch] = useState("")

    const {id} = useParams()
    const productsList= useSelector(state => state.products)
    const products = productsList.find(productItem => productItem.id === Number (id))
    const relatedProducts = productsList.filter(productItem => 
        productItem?.category.id  === products?.category.id
        && productItem !== products
        )

    console.log(relatedProducts);
    console.log(products);

    const addToCart =() => {
        const productos = {
            id: products.id,
            quantity: userSearch
        }
        dispatch(addCartThunk(productos))
    }

    return (
        <div>
            <h1>{products?.title}</h1> <br />
            <input type="number" value={userSearch} onChange={e => setUserSearch(e.target.value)}  />
            <Button onClick={addToCart}>Add to Cart</Button>
            <Row>
                <Col lg={9}>
                <img src={products?.productImgs?.[0]} alt="" className='img-fluid'/> 
                {/* <h3>{products?.description}</h3> */}
                <h3><b>Description: </b></h3>
                <p>{products?.description}</p>
                <h3><b>Price: </b>${products?.price}</h3>
                </Col>
{/* Noticias relacionadas con flush (lista minimalista) */}
                <Col lg={3}>
                    <h3>Related Products</h3>
                    <ListGroup variant="flush">
                        {
                            relatedProducts.map(relatedProduct => (
                                <ListGroup.Item
                                    key={relatedProduct.id}
                                    style={{ cursor: "pointer" }}
                                >
                                    <Link to={`/products/${relatedProduct.id}`}>
                                        {relatedProduct.title}
                                        <img src={relatedProduct.productImgs?.[0]}  alt="" className='img-fluid'/>
                                         <b>Price: </b>${relatedProduct.price}
                                        </Link>
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>
                </Col>
            </Row>
        </div>
    );
};

export default Products;