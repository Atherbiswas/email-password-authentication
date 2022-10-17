import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';

const auth = getAuth(app);

const LoginBootstrap = () => {
    const [loginSuccess, setLoginSuccess] = useState(false);
    const handleClickLogin =(event)=>{
        event.preventDefault();
        setLoginSuccess(false);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signInWithEmailAndPassword(auth,email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setLoginSuccess(true);
        })
        .catch(error => {
            console.error('error' , error)
        })
    }
    return (
        <div className='w-50 mx-auto'>
        <h3 className='text-info'>Please LogIn !!!</h3>
        <Form onSubmit={handleClickLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter your email" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Enter your Password" required/>
            </Form.Group>
             <Button variant="primary" type="submit">Login</Button>
        </Form>
        {loginSuccess && <p className='text-success'>Login successfully</p> } 
        <p><small>New to this website? Please <Link to='/register'>Register</Link></small></p>
    </div>
    );
};

export default LoginBootstrap;