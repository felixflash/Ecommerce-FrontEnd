import React, { useState } from 'react'
import { auth, db } from '../Config/Config'


export const Signup = (props) => {

    // defining state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // signup
    const signup = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((cred) => {
            db.collection('SignedUpUsersData').doc(cred.user.uid).set({
                Name: name,
                Email: email,
                Password: password
            }).then(() => {
                setName('');
                setEmail('');
                setPassword('');
                setError('');
                props.history.push('/login');
            }).catch(err => setError(err.message));
        }).catch(err => setError(err.message));
    }

    return (  <section id="signupcontainer">


<div className="Signupbgimg">
    <img src="https://iammagnus.com/wp-content/uploads/2016/05/website-design-background-1.jpg" alt="bacgroundimage"/>
    </div>

        <div class="bg-dark p-5 text-dark bg-opacity-25">
        <div className='container bg-dark text-light'>
            <br />
            <img class="mb-4" src="https://image.flaticon.com/icons/png/512/4290/4290854.png" alt="" width="50" height="50" />
            <h2>Register</h2>
            < hr />
            <br />
            <form autoComplete="off" className='form-group' onSubmit={signup}>
                <label htmlFor="name">Name</label>
                <input type="text" className='form-control' required
                    onChange={(e) => setName(e.target.value)} value={name} />
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" className='form-control' required
                    onChange={(e) => setEmail(e.target.value)} value={email} />
                <br />
                <label htmlFor="passowrd">Password</label>
                <input type="password" className='form-control' required
                    onChange={(e) => setPassword(e.target.value)} value={password} />
                <br />
                <h5><button type="submit" className='badge text-light btn-lg badge-secondary badge-pill '><i class="fa fa-sign-out fa-spin fa-1x fa-fw text-warning" aria-hidden="true"></i> S U B M I T</button></h5>
            </form>
            {error && <span className='error-msg'>{error}</span>}
            <br />
            <a href="login">Already have an account? Login <span>Here</span></a> 
        </div>
        </div>
        </section> 
    )
}
