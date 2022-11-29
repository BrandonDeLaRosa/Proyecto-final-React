import React, { useEffect } from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProductsThunk } from '../store/slices/products.slice';

const Products = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsThunk())
    },[])

    const {id} = useParams()
    const productsList= useSelector(state => state.products)
    const products = productsList.find(productItem => productItem.id === Number (id))
    // find() trabaja igual que map
    // el id que se recibe es string, y el de productItem es number, para corregir errores, podemos pasr id a number o productItem a string, o colocar ==
    // const products = productsList.find(productItem => productItem.id === Number(id))
    // console.log(products); //<-- cuando se da refresh se pone de nuevo el estado vacio, por lo que se añade el thunk con getProducts


    // se declara que traiga todos los productos cuyo id de categoria sea igual al producto seleccionado en home
    // Y al mismo tiempo que no traiga el producto cuyo id sea igual al seleccionado.
    const relatedProducts = productsList.filter(productItem => 
        productItem?.category.id  === products?.category.id
        && productItem !== products
        )

    console.log(relatedProducts);
    console.log(products);

    return (
        <div>
            <h1>{products?.title}</h1> <br />
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