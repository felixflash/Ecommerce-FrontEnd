import React, { useState } from 'react'
import { auth } from '../Config/Config'


export const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(() => {
            setEmail('');
            setPassword('');
            setError('');
            props.history.push('/');
        }).catch(err => setError(err.message));
    }

    return (
        <div class="bg-secondary p-5 text-dark bg-opacity-25">
        <div className='container bg-dark text-light'>
            <br />
            <img class="mb-4" src="https://image.flaticon.com/icons/png/512/4290/4290854.png" alt="" width="50" height="50" />
            <h2>Login</h2>
            < hr />
            <br />
            <form autoComplete="off" className='form-group' onSubmit={login}>
                <label htmlFor="email">Email</label>
                <input type="email" className='form-control' required
                    onChange={(e) => setEmail(e.target.value)} value={email} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" className='form-control' required
                    onChange={(e) => setPassword(e.target.value)} value={password} />
                <br />
                <div className="buttonspace">
                <h5><button type="submit" className='badge text-light btn-lg badge-secondary badge-pill badge-border no-fill '><i class="fa fa-sign-out fa-spin fa-1x fa-fw text-warning" aria-hidden="true"></i>  L O G I N</button></h5>
                </div>
            </form>
            {error && <span className='error-msg'>{error}</span>}
            <br/>
            <a href="signup">Don't have an account at I-sell? Register <span>Here</span></a> 
            
        </div>
        </div>
    )
}
