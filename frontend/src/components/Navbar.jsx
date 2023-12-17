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
            <Link className="border-2 border-black p-2 mr-4 rounded-xl" to="/login">Login</Link>
            <Link className="border-2 border-black p-2 mr-4 rounded-xl" to="/signup">Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
