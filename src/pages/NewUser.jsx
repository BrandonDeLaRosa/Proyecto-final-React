import axios from 'axios';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const NewUser = () => {

    const  {register, handleSubmit, reset}= useForm()
    const submit = (data) => {
        axios.post("https://e-commerce-api.academlo.tech/api/v1/users" ,data)
       .then(res => console.log(res))
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <h1>New User page</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" {...register("firstName")} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" {...register("lastName")}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" {...register("email")} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register("password")}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="number" placeholder="Phone" {...register("phone")} />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Role</Form.Label>
                    <Form.Control type="text" placeholder="Role" {...register("role")}/>
            </Form.Group> */}

            <Button variant="primary" type="submit">
                    Submit
            </Button>
        </form>
    );
};

export default NewUser;