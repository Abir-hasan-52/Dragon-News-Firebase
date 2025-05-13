import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const Navigate =useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.target);
    const name = e.target.name.value;
    if (name.length < 3) {
      return setNameError("Name Should be more then 3 character");
    } else {
      setNameError("");
    }
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser( {...user,displayName: name, photoURL: photo});
            Navigate("/")
          })
          .catch((error) => {
             console.log(error);
             setUser(user);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <div className="card-body">
          <h1 className="text-5xl font-bold text-center">
            Register your account
          </h1>
          <form onSubmit={handleRegister} className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              type="type"
              name="name"
              className="input"
              placeholder="Enter your name"
              required
            />
            {nameError && <p className="text-red-500 text-xs">{nameError}</p>}
            {/* Photo url */}
            <label className="label">Photo URL</label>
            <input
              type="type"
              name="photo"
              className="input"
              placeholder="Enter your Photo URL"
              required
            />
            {/* email */}

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter your Email"
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Enter your Password"
              required
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="font-semibold text-center pt-2">
              Already Have An Account?
              <Link to="/auth/login" className="text-secondary">
                {" "}
                Login
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
