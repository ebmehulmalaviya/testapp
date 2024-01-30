/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
        const toakan = localStorage.getItem('Tokan');
        toakan ? navigate('/home') : navigate('/')
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { username, password }
        localStorage.setItem('Tokan', JSON.stringify(user));
        const toakan = localStorage.getItem('Tokan');
        if (toakan) navigate('/home')

    };

    return (
        <div className="container mt-10 ">
            <div className='w-1/2 mx-auto border p-5 mt-20 bg-gray-200'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit} className='text-left pt-4'>
                    <div className="mb-3 px-5">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="mb-8 px-5">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mt-3 px-5 flex justify-center">
                        <button className='btn btn-dark w-40' type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
