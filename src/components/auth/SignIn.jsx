import React, { useState } from 'react';
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


function SignIn () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((useCredential) => {
            console.log(useCredential)
        }).catch((error) => {
           console.log(error);
        });
    };


  return (
    <div className='sign-in-container'>
        <form onSubmit={signIn}>
            <h1> Log In </h1>
            <input type="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

            <button type="submit">Login</button>
        </form>
      
    </div>
  )
}

export default SignIn
