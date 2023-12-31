import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-1 p-2 shadow bg-base-100 rounded-box w-32"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : "text-gray-700"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistic"
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : "text-gray-700"
                }
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/applied-jobs"
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : "text-gray-700"
                }
              >
                Applied Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : "text-gray-700"
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="normal-case text-lg md:text-3xl font-bold">
          professionalLife
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="font-semibold mr-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-indigo-600" : "text-gray-700"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="font-semibold mr-2">
            <NavLink
              to="/statistic"
              className={({ isActive }) =>
                isActive ? "text-indigo-600" : "text-gray-700"
              }
            >
              Statistics
            </NavLink>
          </li>
          <li className="font-semibold mr-2">
            <NavLink
              to="/applied-jobs"
              className={({ isActive }) =>
                isActive ? "text-indigo-600" : "text-gray-700"
              }
            >
              Applied Jobs
            </NavLink>
          </li>
          <li className="font-semibold">
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-indigo-600" : "text-gray-700"
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn btn-info text-white text-xs md:text-lg md:font-semibold">
          Start Applying
        </Link>
      </div>
    </div>
  );
};

export default Header;
