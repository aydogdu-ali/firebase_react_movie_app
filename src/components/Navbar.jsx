import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../assets/icons/avatar.png";
// import { logOut } from "../auth/firebase";

const Navbar = () => {
  const currentUser = { displayName: "Ali" };
  return (
    <>
      <nav className=" w-full flex flex-wrap items-center justify-between py-3 bg-gray-900  shadow-lg navbar navbar-expand-lg fixed-top">
        <div className="container-fluid text-white w-full flex items-center justify-between px-6">
          <Link to="/" className="text-2xl  pr-2 font-semibold">
            Movie App with React
          </Link>

          {/* Right elements */}
          <div className="flex items-center relative">
            {currentUser && (
              <h5 className="px-5 mr-3">{currentUser?.displayName}</h5>
            )}
         

            <div className="dropdown relative">
              <div
                
              >
                <img
                  src={currentUser?.photoURL || Avatar}
                  className="rounded-full"
                  style={{ height: "25px", width: "25px" }}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div
                className="dropdown-menu min-w-max absolute  bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
               
              >
                <li>
                  <Link
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    to="/register"
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <span
                    className=" text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    role="button">
                    Logout
                  </span>
                </li>
              </div>
            </div>
          </div>
          {/* Right elements */}
        </div>
      </nav>
      <div className="h-[52px]"></div>
    </>
  );
};

export default Navbar;