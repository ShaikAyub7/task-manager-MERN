import React, { useState } from "react";
import { useGlobalContext } from "./context/Context";
import { Link } from "react-router-dom";
import Theme from "./Theme";
const Navbar = () => {
  const { user, handleLogout, decoded, setSearchTerm, searchTerm } =
    useGlobalContext();

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Task Me</a>
        </div>
        <div>{/* <Theme /> */}</div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-neutral text-neutral-content">
                  <div className="avatar avatar-placeholder flex items-center justify-center  h-8  w-8 rounded-full bg-neutral text-neutral-content">
                    <p className="text-md">
                      {decoded.email.toUpperCase().slice(0, 2)}
                    </p>
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-2xl"
              >
                <li className="border border-gray-400">
                  <Link to={"/login"} onClick={handleLogout}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="btn btn-primary">Login</button>{" "}
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
