import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';



const auth = getAuth(app);

function ReactBootstrap() {
    const [passwordError, setPasswordError] = useState('');
    const [createSuccess, setCreateSuccess] = useState(false);
    const handleClickRegister =(event)=>{
        event.preventDefault();
        setCreateSuccess(false)
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setPasswordError('Please provide at least two uppercase');
            return;

        }
        if(password.length < 6){
            setPasswordError('Password should be at least 6 characters');
            return;
        }
        if(!/(?=.*[#$@!%&*?])/.test(password)){
            setPasswordError('Please add at least one special character');
            return;
        }
        setPasswordError('');
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setCreateSuccess(true);
            form.reset();
            verifyEmail();
        })
        .catch(error => {
            console.error('error', error);
            setPasswordError(error.message);
        })

    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
        .then( () => {
            alert('Please check your email and verify your email')
        })
    }
  return (
    <div className='w-50 mx-auto'>
        <h3 className='text-info'>Please Register !!!</h3>
        <Form onSubmit={handleClickRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter your email" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Enter your Password" required/>
            </Form.Group>
            <p className='text-danger'>{passwordError}</p>
            {createSuccess && <p className='text-success'>Created Succesfully</p>}
             <Button variant="primary" type="submit">Register</Button>
        </Form>
        <p><small>Already Have account? Please <Link to='/login'>Login</Link></small></p>
    </div>
  );
}

export default ReactBootstrap;