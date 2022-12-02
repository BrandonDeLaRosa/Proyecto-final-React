import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, InputGroup, ListGroup, Row, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterNameProductThunk, filterPrice, filterProductsThunk, getProductsThunk } from '../store/slices/products.slice';

const Home = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    const [categoriesList, setCategoriesList] = useState([])
    const [searchByName, setSearchByName] = useState("")

    const [fromPrice, setFromPrice] = useState("")
    const [toPrice, setToPrice] = useState("")
    
    // const filter = () =>{
    //      products.filter(productItem => productItem.price >= Number(fromPrice) && productItem.price <= Number(toPrice))
    // }

    useEffect(() => {
        dispatch(getProductsThunk())
        axios.get("https://e-commerce-api.academlo.tech/api/v1/products/categories")
        .then(res => setCategoriesList(res.data.data.categories))
    },[])
    

    // console.log(categoriesList);
    console.log(products);
    
    return (
        <div>
            <Row>
                <Col lg={3}>
                    <ListGroup> 

                        <input type="number" value={fromPrice} onChange={e => setFromPrice (e.target.value)} placeholder="From"/>                       
                        <input type="number" value={toPrice} onChange={e => setToPrice (e.target.value)} placeholder="To"/>
                        <button onClick={() => dispatch(filterPrice({fromPrice, toPrice}))}>
                        Submit
                        </button>


                        {
                            categoriesList.map(category => (
                                <div key={category.id}>
                                    <ListGroup.Item onClick={() => dispatch(filterProductsThunk(category.id))}
                                    style={{cursor: "pointer"}} 
                                    >
                                        {category.name}
                                    </ListGroup.Item>
                                </div>
                            ))
                        }
                    </ListGroup>

                </Col>
                <Col lg={9}>
                    <h1>Home Page</h1>

                    <div>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                value={searchByName} onChange={e => setSearchByName(e.target.value)}
                            />
                            <Button onClick={() => dispatch(filterNameProductThunk(searchByName))}
                                variant="outline-secondary" id="button-addon2"
                            >
                                Button
                            </Button>
                        </InputGroup>
                    </div>

                    <Row xs={1} md={2} lg={3} className="g-4">
                        {products.map(product => (
                            <Col key={product.id}>
                                <Card >
                                    <Link to={`/products/${product.id}`}
                                    style={{textDecoration: "none"}}
                                    >
                                        <Card.Img variant="top" className='imgHome' src={product.productImgs[0]} alt="ProductImg"
                                            style={{
                                                height: "200px",
                                                // widht:"50%"
                                                objectFit: "contain"
                                                // object-fit: "contain" Es o camel Case o - y todo en minusc.
                                            }}
                                        />
                                        <Card.Body>
                                            <Card.Title>{product.title} <br /></Card.Title>
                                            <Card.Text>
                                                   $ {product.price}
                                            </Card.Text>
                                        </Card.Body>
                                    </Link>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Home;

// https://vimeo.com/775407430/c66be8992a