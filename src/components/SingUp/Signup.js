import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Signup = () => {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const[error, SetError] = useState('');

    const navigate = useNavigate();

    const [createUserWithEmailAndPassword , user ] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);

    }

    const handleConfirmPassword = event =>{
        setConfirmPassword(event.target.value);
    }

    const handleCreateUser = event =>{
        event.preventDefault();
        if( password !== confirmPassword){
            SetError('Your two password did Not match');
            return;
        }

        if(password.length < 6){
            SetError('the password should be more then 6 characters')
            return;

        }

        if(user){
            navigate('/');
        }

        createUserWithEmailAndPassword(email , password)

    

    }

    return (
        <div className='form-container'>

        <div>
            <h1 className='form-title'>Sign Up</h1>

            <form onSubmit={handleCreateUser }>
                
            <div className='input-group'>
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" name="email" id="email" required/>
            </div>

            <div className='input-group'>
                <label htmlFor="password">Password</label>
                <input onBlur={handlePasswordBlur} type="password" name="password" id="password" required />
            </div>

            <div className='input-group'>
                <label htmlFor="password"> Confirm-Password</label>
                <input onBlur={handleConfirmPassword} type="password" name="password" id="password" required />
            </div>

            <p style={{color:'red'}}>{error}</p>

            <input className='form-submit' type="submit" value="Sign Up" />

            </form>

                <p>
                    Already Have an account? <Link className='form-link' to="/login">Login</Link>
                </p>
        </div>
    </div>
    );
};

export default Signup;