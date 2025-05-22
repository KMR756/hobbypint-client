import React, { use } from "react";
import logo from "../assets/logo-white.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    console.log("user tring logout");
    logOut()
      .then(() => {
        // Sign-out successful.
        console.log("sign out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="bg-[#F2F2F2]  py-3">
      <div className="navbar p-0  w-[98%] md:w-[90%] lg:w-[95%] xl:w-[90%] mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 md:h-10 w-5 md:w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-6 w-40 items-center  p-2 shadow"
            >
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "lato-bold text-sm  text-white  border border-blue-500    rounded-lg  px-11 py-2.5 text-center me-2 mb-2 bg-blue-500"
                      : "lato-bold text-sm text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800   rounded-lg  px-11 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 transition-all duration-200  "
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"allGroup"}
                  className={({ isActive }) =>
                    isActive
                      ? "lato-bold text-sm text-white  border border-blue-500    rounded-lg  px-7.5 py-2.5 text-center me-2 mb-2 bg-blue-500"
                      : "lato-bold text-sm text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800   rounded-lg  px-7.5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 transition-all duration-200  "
                  }
                >
                  All Groups
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"createGroup"}
                  className={({ isActive }) =>
                    isActive
                      ? "lato-bold text-sm text-white  border border-blue-500    rounded-lg  px-5 py-2.5 text-center me-2 mb-2 bg-blue-500"
                      : "lato-bold text-sm text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800   rounded-lg  px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 transition-all duration-200  "
                  }
                >
                  Create Group
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"myGroups"}
                  className={({ isActive }) =>
                    isActive
                      ? "lato-bold text-sm text-white  border border-blue-500    rounded-lg  px-7 py-2.5 text-center me-2 mb-2 bg-blue-500"
                      : "lato-bold text-sm text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800   rounded-lg  px-7 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 transition-all duration-200  "
                  }
                >
                  My Groups
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to={"/"}>
            <img className="h-10 md:h-15 lg:h-18 xl:h-20" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div>{user && user.email}</div>
          <ul className="flex   gap-5 ">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "lato-bold text-xl text-white  border border-blue-500    rounded-lg  px-5 py-2.5 text-center me-2 mb-2 bg-blue-500"
                    : "lato-bold text-xl text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800   rounded-lg  px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 transition-all duration-200  "
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/allGroup"}
                className={({ isActive }) =>
                  isActive
                    ? "lato-bold text-xl text-white  border border-blue-500    rounded-lg  px-5 py-2.5 text-center me-2 mb-2 bg-blue-500"
                    : "lato-bold text-xl text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800   rounded-lg  px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 transition-all duration-200  "
                }
              >
                All Groups
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/createGroup"}
                className={({ isActive }) =>
                  isActive
                    ? "lato-bold text-xl text-white  border border-blue-500    rounded-lg  px-5 py-2.5 text-center me-2 mb-2 bg-blue-500"
                    : "lato-bold text-xl text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800   rounded-lg  px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 transition-all duration-200  "
                }
              >
                Create Group
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/myGroups"}
                className={({ isActive }) =>
                  isActive
                    ? "lato-bold text-xl text-white  border border-blue-500    rounded-lg  px-5 py-2.5 text-center me-2 mb-2 bg-blue-500"
                    : "lato-bold text-xl text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800   rounded-lg  px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 transition-all duration-200  "
                }
              >
                My Groups
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <button onClick={handleLogOut}>
              <NavLink
                to={"/auth/signin"}
                className={({ isActive }) =>
                  isActive
                    ? "lato-bold text-xl text-white  border border-blue-500    rounded-3xl  px-5 py-2.5 text-center me-2 mb-2 bg-blue-500"
                    : "lato-bold text-xl text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800   rounded-3xl  px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 transition-all duration-200  "
                }
              >
                Log Out
              </NavLink>
            </button>
          ) : (
            <button>
              <NavLink
                to={"/auth/signin"}
                className={({ isActive }) =>
                  isActive
                    ? "lato-bold text-xl text-white  border border-blue-500    rounded-3xl  px-5 py-2.5 text-center me-2 mb-2 bg-blue-500"
                    : "lato-bold text-xl text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800   rounded-3xl  px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 transition-all duration-200  "
                }
              >
                Sign In
              </NavLink>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
