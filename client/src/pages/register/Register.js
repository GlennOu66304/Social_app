import React, { useRef } from 'react'
import './register.css'
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Register() {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const passwordAgain = useRef()
    const history = useHistory()
    const axionsInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL
    })
    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            password.current.setCustomValidity("password don't match")
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }


            try {
                await axionsInstance.post('auth/register', user)
                history.push('/login')
            } catch (err) {
                console.log(err)
            }

        }

    }

    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Lama Social</h3>
                    <span className="loginDesc"> Connect with the friends and world around you on Lamasocial</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Username" required className="loginInput" ref={username} />
                        <input placeholder="Email" required type="email" className="loginInput" ref={email} />
                        <input placeholder="Password" required type="password" minLength='6' className="loginInput" ref={password} />
                        <input placeholder="Password Again" required type="password" className="loginInput" ref={passwordAgain} />
                        <button className="loginButton" type='submit'>Sign Up</button>
                        <button className="loginRegisterbutton">Login to Account</button>
                    </form>
                </div>
            </div>

        </div>
    )
}
