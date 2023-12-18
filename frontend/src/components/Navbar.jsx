import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="bg-white shadow-md p-6 flex justify-between items-center">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          <div>
            <Link className="bg-blue-500 text-white p-2 mr-4 " to="/login">Login</Link>
            <Link className="bg-blue-500 text-white p-2 mr-4 " to="/signup">Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
