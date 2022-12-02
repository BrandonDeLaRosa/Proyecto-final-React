import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const { register, handleSubmit, reset} = useForm()
    const navigate = useNavigate()
    // Los tres puntos = spreadOperator

    // const submit = (data) => {
    //     axios.post("https://e-commerce-api.academlo.tech/api/v1/users/login", data)
    //      .then(res => navigate("/"))
    //     //  Error de autenticacion = 401 
    //      .catch(error => {
    //         if(error.response?.status === 404){
    //             alert("Credenciales incorrectas")
    //         }else {
    //             console.log(error.response.data)
    //         }
    //      })
    // }

    const submit = (data) => {
        // alert('hola mundo' + data)
        console.log(data);
        axios.post("https://e-commerce-api.academlo.tech/api/v1/users/login/", data)
            .then(res => {
                navigate('/')
                console.log(res);
                localStorage.setItem("token" , res.data.data.token)
            })
            .catch(err => {
                if (err.response?.status === 404) {
                    alert('esta mal la contrasenia')
                } else {
                    console.log(err.response?.data);
                }
            })
    }



    return (
        <div>
            <h1>Login page</h1>
            <Form onSubmit={handleSubmit(submit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" {...register("email")} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register("password")}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;