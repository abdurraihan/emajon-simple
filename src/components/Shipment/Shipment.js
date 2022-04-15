import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Shipment = () => {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [address , setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const[error, SetError] = useState('');

 //   const navigate = useNavigate();
/* 
    const [createUserWithEmailAndPassword , user ] = useCreateUserWithEmailAndPassword(auth);
 */
    const handleNameBlur = event =>{
        setEmail(event.target.value);
    }

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handleAddressBlur = event =>{
        setAddress(event.target.value);

    }

    const handlePhoneNumber = event =>{
        setPhoneNumber(event.target.value);
    }

   
    return (
        <div>
            <div className='form-container'>

                <div>
                    <h1 className='form-title'>Shippment Information</h1>

                    <form >

                    <div className='input-group'>
                            <label htmlFor="name">Your Name</label>
                            <input onBlur={handleNameBlur} type="text" name="name" id="name" required />
                        </div>

                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmailBlur} type="email" name="email" id="email" required />
                        </div>

                        <div className='input-group'>
                            <label htmlFor="address">Address</label>
                            <input onBlur={handleAddressBlur} type="text" name="address" id="address" required />
                        </div>

                        <div className='input-group'>
                            <label htmlFor="phoneNumber"> Phone Number</label>
                            <input onBlur={handlePhoneNumber} type="number" name="phoneNumber" id="PhoneNumber" required />
                        </div>

                        <p style={{ color: 'red' }}>{error}</p>

                        <input className='form-submit' type="submit" value="Add shopping" />

                    </form>

                    <p>
                        Already Have an account? <Link className='form-link' to="/login">Login</Link>
                    </p>
                </div>
            </div>
            );
        </div>
    );
};

export default Shipment;