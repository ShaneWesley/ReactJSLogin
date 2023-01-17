import './sign-up.css';

import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const placeholders = ['First Name',
    'Last Name',
    'Email',
    'Password',
    'Contact Number'];

function SignUp() {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        contactNumber: ''
    });
    var keys = Object.keys(userData);

    const navigate = useNavigate();

    useEffect(() => {
        console.log(userData);
    });

    function resetUserData() {
        for (var element in userData) {
            userData[element] = '';
        }

        navigate('/login');
    }

    function handleChange(event) {
        const target = event.target;
        const newUser = {
            ...userData
        }

        for (var element in userData) {
            newUser[element] = (target.name === element) ? target.value : userData[element];
        }

        setUserData(newUser);
    }

    function onSignUp() {
        resetUserData();
    }

    return (
        <div className="background">
            <div className="rounded-square sign-in">
                <div className="container">
                    <form>
                        <h2>Sign Up</h2>
                        {
                            placeholders.map((placeholder, i) => <input key={`input-key${i}`} className='text-box' type='text'
                                value={userData[i]} onChange={handleChange} name={keys[i]} placeholder={placeholder} />)
                        }
                        <div className="button-container">
                            <button onClick={onSignUp}>Sign Up</button>
                        </div>
                    </form>
                    <div className="link-container sign-in">
                        <a className="link" href="/login">Already have an account?</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;