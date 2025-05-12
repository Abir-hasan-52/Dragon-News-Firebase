import React from "react";
import { Link, NavLink } from "react-router";
import user from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mt-5 mb-10">
      <div className=""> </div>
      <div className="flex gap-5 text-accent items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `btn border-0 font-semibold ${
              isActive
                ? "bg-accent text-white" // Active style
                : "bg-base-100 hover:bg-base-300 text-accent" // Default style
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `btn border-0 font-semibold ${
              isActive
                ? "bg-accent text-white" // Active style
                : "bg-base-100 hover:bg-base-300 text-accent" // Default style
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/career"
          className={({ isActive }) =>
            `btn border-0 font-semibold ${
              isActive
                ? "bg-accent text-white" // Active style
                : "bg-base-100 hover:bg-base-300 text-accent" // Default style
            }`
          }
        >
          Career
        </NavLink>
      </div>
      <div className="flex gap-5 items-center">
        <img src={user} alt="" />
        <Link to='/auth/login' className="btn btn-primary py-2">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
