import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Cookies from 'js-cookie'

const Navbar = ({ isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolltoY, setscrolltoY] = useState(0);
  const [setScroll, setsetScroll] = useState(true);

  const onScroll = () => {
    var scrolledUp = window.scrollY || document.documentElement.scrollTop;
    setscrolltoY(scrolledUp);
    const scrolled = scrolltoY >= 300;
    if (scrolled) {
      setsetScroll(false);
    } else {
      setsetScroll(true);
    }
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", onScroll);
    };

    watchScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <div className={`fixed  z-50 flex flex-col justify-center items-center  w-[100%] h-[110px] backdrop-blur-lg transition-all duration-[1s]  ${setScroll ? 'top-[0px]':'top-[-110px]'}`}>
      <nav
        id="myNav"
        className={`backdrop-blur-lg   rounded-full py-2 border-2 border-[#FB5607]  transition-all duration-[2s] mt-4 w-11/12 shadow-md ${setScroll ? '':'w-[60%]'} `}
      >
        <div className="flex justify-between items-center max-w-[1160px] mx-auto">
          <Link to="/">
            <img src={logo} alt="Logo" width={120} height={10} loading="lazy" />
          </Link>

          <div className="hidden md:flex items-center gap-x-8">
            <ul className="text-orange-600 flex gap-x-8 text-xl">
              <li className="hover:text-white">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-white">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:text-white">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            {!isLoggedIn && (
              <>
                <Link to="/login">
                  <button className="nav-btn py-2 px-4 text-white bg-[#fb5607] rounded-md">
                    Log in
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="nav-btn text-white bg-[#fb5607] py-2 px-4 rounded-md">
                    Sign up
                  </button>
                </Link>
              </>
            )}
            {isLoggedIn && (
              <>
                <Link to="/dashboard">
                  <button className="nav-btn py-2 px-4 text-white bg-[#fb5607] rounded-md">
                    Dashboard
                  </button>
                </Link>
                <button
                  onClick={() => {
                    toast('Logged out successfully!');
                    Cookies.remove('jwt_token');
                    window.location.href = '/';
                  }}
                  className="nav-btn text-white bg-[#fb5607] py-2 px-4 rounded-md"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          <div className="block md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-orange-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-[#FB5607] py-3">
            <ul className="text-orange-600 flex flex-col items-center gap-y-3 text-xl">
              <li>
                <Link to="/" onClick={() => setIsOpen(!isOpen)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setIsOpen(!isOpen)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setIsOpen(!isOpen)}>
                  Contact
                </Link>
              </li>
              {isLoggedIn && (
                <>
                  <li>
                    <Link to="/dashboard" onClick={() => setIsOpen(!isOpen)}>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                      }}
                      className="nav-btn"
                    >
                      Log Out
                    </button>
                  </li>
                </>
              )}
              {!isLoggedIn && (
                <>
                  <li>
                    <Link to="/login" onClick={() => setIsOpen(!isOpen)}>
                      <button className="nav-btn">Log in</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup" onClick={() => setIsOpen(!isOpen)}>
                      <button className="nav-btn">Sign up</button>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
