import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.svg";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("You Logged Out successfully");
      })
      .catch(() => {
      });
  };

  return (
    <nav className="flex md:justify-between justify-start flex-wrap items-center gap-4 sm:gap-0 py-4 px-4 sm:px-8">
      {/* User Email (shown if logged in) */}
      <div className="text-sm sm:text-base text-accent">
        {user && user.email}
      </div>

      {/* Navigation Links */}
      <div className="flex flex-row gap-2 sm:gap-5 text-accent text-sm sm:text-base">
        <NavLink to="/" className="hover:underline">Home</NavLink>
        <NavLink to="/about" className="hover:underline">About</NavLink>
        <NavLink to="/career" className="hover:underline">Career</NavLink>
      </div>

      {/* Profile and Auth Button */}
      <div className="flex items-center gap-3">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={user?.photoURL || userIcon}
          alt="User"
        />
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-primary btn-sm sm:px-6"
          >
            Log Out
          </button>
        ) : (
          <Link to="/auth/login">
            <button className="bg-primary text-white py-2 btn-sm text-sm sm:text-base px-8">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
