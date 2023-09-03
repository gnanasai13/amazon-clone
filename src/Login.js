
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Login.css"
import {auth} from "./firebase"


function Login() {  
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth => {
                navigate('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                if(auth) {
                    navigate('/')
                }
        })
        .catch(error => alert(error.message));
    }

  return (
    <div className='login'>
        <Link to="/">
        <img className='login__logo' src="https://press.aboutamazon.in/static-files/3ca754e0-9176-4d89-8174-056267008479" alt=""/>
        </Link>

        <div className="login__container">
            <h1>Sign-in</h1>

            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange={e=> setPassword(e.target.value)} />

                <button className='login__signinbutton' type="submit" onClick={signIn}>Sign In</button>
            </form>

            <p>
                By signing-in you agree to the AMAZON CLONE conditions of Use and Sale. Please see our Privacy Notice, our Cookes Notice and our Interest-Based Ads Notice.
            </p>

            <button className='login__registerbutton' onClick={register}>Create a New Account</button>

        </div>

        
        
    </div>
  )
}

export default Login