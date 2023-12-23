import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import WorkoutLogo from '../assets/WorkoutLogo.svg'

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  };
  return (
    <header className="border-b-2 border-gray-700">
      <div className=" shadow-md p-6 flex justify-between items-center">
        <Link to="/">
        <div className="flex items-center">
          <img src={WorkoutLogo} alt=""  className="w-10 mr-3" />
          <h1>FitHub</h1>
        </div>
        </Link>

        <nav>
          {user && (
            <div>
              <span className="mr-2">{user.email}</span>
              <button
                onClick={handleClick}
                className="bg-blue-500 text-white p-1.5 1111 mr-4 "
              >
                Logout
              </button>
            </div>
          )}
          {!user && (

          <div>
            <Link className="bg-blue-500 text-white p-2 mr-4 " to="/login">
              Login
            </Link>
            <Link className="bg-blue-500 text-white p-2 mr-4 " to="/signup">
              Signup
            </Link>
          </div>
          )}
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
