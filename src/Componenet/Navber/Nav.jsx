import { NavLink } from "react-router-dom";
import "animate.css";
import { AuthContext } from "../../Context/Context";
import { useContext } from "react";
import logo from "../../assets/logo.jpg";

const Nav = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className=" ">
      <div className=" animate__animated animate__bounce animate__bounce navbar bg-neutral text-neutral-content">
        <button className="btn btn-ghost text-xl mx-auto text-white">
          Welcome {user?.displayName}
        </button>
      </div>

      <div className="navbar bg-base-100 w-10/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                <NavLink to="/brands">Brand</NavLink>
              </li>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
            </ul>
          </div>
          <img className="w-28 h-28" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/brands">Brand</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <button onClick={logout} className="btn mr-4">
                LogOut
              </button>
              <p className="btn mr-4">{user?.email}</p>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="">
                    <img src={user?.photoURL} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <NavLink className="btn mr-4" to="/login">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
