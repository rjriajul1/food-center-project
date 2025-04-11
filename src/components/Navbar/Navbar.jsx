import React from "react";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  return (
    <div>
      <div>
        <div className="bg-cyan-500 px-4 lg:px-10 shadow-sm py-2">
          <div className="flex justify-between items-center">
            {/* Logo  */}
            <div className="">
              <img
                className="w-24 rounded-full object-cover"
                src={logo}
                alt=""
              />
            </div>

            {/* menu bar */}
            <div className="hidden md:block">
              <nav>
                <ul className="flex gap-10 font-bold ">
                  <li className="btn border-none hover:bg-blue-500 hover:text-white">
                    <a href="">Home</a>
                  </li>
                  <li className="btn border-none  hover:bg-blue-500 hover:text-white">
                    <a href="">Menu</a>
                  </li>
                  <li className="btn border-none  hover:bg-blue-500 hover:text-white">
                    <a href="">About</a>
                  </li>
                  <li className="btn border-none  hover:bg-blue-500 hover:text-white">
                    <a href="">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* dropdown menu bar */}
            <div className="dropdown md:hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content flex flex-col   -ml-40 bg-base-100 rounded-box z-1 mt-8 w-52 p-2 shadow"
              >
                <li className="btn border-none hover:bg-blue-500 hover:text-white">
                  <a href="">Home</a>
                </li>
                <li className="btn border-none  hover:bg-blue-500 hover:text-white">
                  <a href="">Menu</a>
                </li>
                <li className="btn border-none  hover:bg-blue-500 hover:text-white">
                  <a href="">About</a>
                </li>
                <li className="btn border-none  hover:bg-blue-500 hover:text-white">
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
