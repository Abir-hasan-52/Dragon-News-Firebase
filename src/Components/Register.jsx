import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
         <div className="flex justify-center items-center min-h-screen" >
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <div className="card-body">
          <h1 className="text-5xl font-bold text-center">Register your account</h1>
          <fieldset className="fieldset">

            {/* name */}
            <label className="label">Name</label>
            <input type="type" className="input" placeholder="Enter your name" /> 
            {/* Photo url */}
            <label className="label">Photo URL</label>
            <input type="type" className="input" placeholder="Enter your Photo URL" /> 
            {/* email */}

            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Enter your Email" /> 
            {/* password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Enter your Password" />
             
            <button className="btn btn-neutral mt-4">Register</button>
            <p className="font-semibold text-center pt-2">Already Have An Account?<Link to='/auth/login' className="text-secondary"> Login</Link> </p>
          </fieldset>
        </div>
      </div>
    </div>
    );
};

export default Register;