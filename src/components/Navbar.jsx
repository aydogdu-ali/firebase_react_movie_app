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
          <div className=" text-center">
            <span>
              {" "}
              {currentUser && <span>{currentUser?.displayName}</span>}
            </span>

            <div className="items-center justify-between ">
              <div className=" flex justify-center ">
                <img
                  src={currentUser?.photoURL || Avatar}
                  className="rounded-full "
                  style={{ height: "25px", width: "25px" }}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between ">
                <span>
                  <Link
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-red-700 hover:bg-gray-100"
                    to="/register"
                  >
                    Register
                  </Link>
                </span>
                <span>
                  <Link
                    className=" text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-red-700 hover:bg-gray-100"
                    to="/login"
                  >
                    Login
                  </Link>
                </span>
                <span>
                  <span
                    className=" text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-red-700 hover:bg-gray-100"
                    role="button"
                  >
                    Logout
                  </span>
                </span>
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