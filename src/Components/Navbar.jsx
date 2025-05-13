import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    // console.log('trying log out')
    logOut()
      .then(() => {
        alert("Sign-out successful.")  
      })
      .catch((error) => {
         console.log(error);
      });
  };
  return (
    <div className="flex items-center justify-between mt-5 mb-10">
      <div className="">{user && user.email} </div>
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
        <img className="w-10 rounded-full" src={`${user ? user.photoURL : userIcon}`} alt="" />
        {user ? (
          <Link onClick={handleLogOut} className="btn btn-primary py-2">
            Log Out
          </Link>
        ) : (
          <Link to="/auth/login" className="btn btn-primary py-2">
            Login
          </Link>
        )}
        {/* <Link to='/auth/login' className="btn btn-primary py-2">Login</Link> */}
      </div>
    </div>
  );
};

export default Navbar;
