/* eslint-disable no-undef */
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function LoginProtected(props) {
    const { Component } = props
    const navigate = useNavigate()

    useEffect(() => {
        const toakan = localStorage.getItem('Tokan');
        console.log('prot tkn', toakan);
        if (!toakan) navigate('/')
    }, [props])

    return (
        <div>
            <Component />
        </div>
    )
}

export default LoginProtected
