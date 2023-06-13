import React, { useEffect, useState, useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import {AuthContext} from '../AuthContext';


const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const {user, login, logout} = useContext(AuthContext);

  useEffect(() => {
    document.title = "Login";
  }, []);

  const logIn = async (e) => {
    e.preventDefault();
    try {
      console.log("tried to login");
      await login(email, password);
      console.log("loggedIn");
      // Handle successful login
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <Navbar />
      <main>
        <div className="max-w-xl mb-20 mx-auto mt-20 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Welcome Back!
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-400 p-2 w-full rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-400 p-2 w-full rounded-lg"
                required
              />
            </div>
            <button
              className="bg-gray-800 text-white py-2 px-4 rounded-lg font-semibold w-full"
              onClick={e => logIn(e)}
            >
              Login
            </button>
          </form>
          <p className="text-gray-400 text-sm mt-2 flex justify-between italic font-semibold">
            <span>Demo email: demo@gmail.com </span>
            <span>Demo password: demodemo</span>
          </p>
          <hr className="my-6 border-gray-400" />
          <p className="text-gray-800 font-semibold">
            Don't have an account yet?{" "}
            <Link to={'/signup'} className="text-gray-800 font-semibold underline">
              Signup
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Loginpage;