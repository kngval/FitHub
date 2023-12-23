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
          <img src={WorkoutLogo} alt=""  className="w-7 sm:w-10 mr-3" />
          <h1 className="text-xs sm:text-sm">FitHub</h1>
        </div>
        </Link>

        <nav>
          {user && (
            <div>
              <span className="text-xs sm:text-sm mr-2 ">{user.email}</span>
              <button
                onClick={handleClick}
                className="logout rounded-md text-white p-1.5 1111 mr-4 text-xs sm:text-sm"
              >
                Logout
              </button>
            </div>
          )}
          {!user && (

          <div>
            <Link className="loginBtn text-white p-2 mr-4 rounded-md" to="/login">
              Login
            </Link>
            <Link className="signupBtn text-white p-2 mr-4 rounded-md" to="/signup">
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
