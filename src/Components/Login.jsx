import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

 

const Login = () => {
    const [error, setError]=useState('')
    const {signInUser}=use(AuthContext);
    const location =useLocation();
    const Navigate = useNavigate()
    console.log(location);
    

    const handleLogin=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);
        signInUser(email,password)
        .then(result=>{
            const user = result.user
            console.log(user)
            Navigate(`${location.state ? location.state : "/"}`)

        })
        .catch(error=>{
            const errorCode = error.code;
            // console.log(error);
            setError(errorCode);
        })

    }
  return (
    <div className="flex justify-center items-center min-h-screen" >
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <div className="card-body">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <form onSubmit={handleLogin} className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" required />
            {/* password */}
            <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" required />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" className="btn btn-neutral mt-4">Login</button>
            <p className="font-semibold text-center pt-2">Dont’t Have An Account?<Link to='/auth/register' className="text-secondary">Register</Link> </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
