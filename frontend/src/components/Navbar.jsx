import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {AuthContext} from "../AuthContext";
import Search from "./Search";
import { set } from "lodash";

const Navbar = () => {
  const {user, login, logout} = useContext(AuthContext);
  const handleLogout = async () => {
    console.log("button clicked");
    await logout();
  };

  return (
    <>
      <nav className="bg-gray-900 shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <Link to="/">
              <div className="flex flex-shrink-0 items-center text-4xl font-bold text-white py-2">
                DealSteal
              </div>
            </Link>
            {/* <div className="flex items-center">
              <div className="hidden md:block">
                <Link
                  to="/categories"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                >
                  Categories
                </Link>
                <Link
                  to="/patents"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                >
                  Patents
                </Link>
              </div>
            </div> */}
            <Search />
            <div className="flex items-center">
              <div className="hidden md:block">
                {user && (
                  <Link
                    to="/sell"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                  >
                    Sell
                  </Link>
                )}
                <Link
                  to="/about"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                >
                  About Us
                </Link>
                {!user && (
                  <Link
                    to="/login"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                  >
                    LogIn
                  </Link>
                )}
                {!user && (
                  <Link
                    to="/signup"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                  >
                    SignUp
                  </Link>
                )}
                {user && (
                  <Link
                    to="/mybids"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                  >
                    My Bids
                  </Link>
                )}
                {user && (
                  <button
                    onClick={handleLogout}
                    to="/"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                  >
                    LogOut
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
