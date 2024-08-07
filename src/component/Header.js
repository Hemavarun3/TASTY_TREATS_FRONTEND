import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const menuRef = useRef();

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
    setTimeout(() => {
      setShowMenu((prev) => !prev);
    }, 2000);
  };

  const handleLogout2 = async () => {
    const user = localStorage.getItem("user");
    if (user) {
      const fdata = JSON.parse(user); // Parse JSON string to object
      console.log(user);
      try {
        const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/users/logout`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(fdata)
        });
        const result = await fetchData.json();
        toast(result.data);
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      } catch (error) {
        toast("Failed to logout");
        console.log(error.message)
      }
    }
  };

  const handleLogout = () => {
    dispatch(logoutRedux());
    handleLogout2();
  };

  return (
    <div className="shadow-md h-24 md:px-32 px-16 fixed z-10 w-full font-semibold bg-maincolor text-white">
      <div className="flex items-center h-full justify-between">
        <Link to={""} className="no-underline">
          <div className="h-10">
            <h3 className="flex text-white text-2xl">
              TASTY<span className="text-main2color">TREATS</span>
            </h3>
          </div>
        </Link>

        <div className="flex items-center">
          <nav className="text-base md:text-lg space-x-12 hidden lg:flex">
            <Link to={"/"} className="text-white no-underline">
              <p className="hover:text-red-400 font-semibold">Home</p>
            </Link>
            <Link to={"/menu"} className="text-white no-underline">
              <p className="hover:text-red-400 font-semibold">Menu</p>
            </Link>
            {!userData.isAdmin && (
              <Link to={"/orders"} className="text-white no-underline">
                <p className="hover:text-red-400 font-semibold">Orders</p>
              </Link>
            )}
            {userData.isAdmin ? (
              <Link to={"/dashboard"} className="text-white no-underline">
                <p className="hover:text-red-400 font-semibold">Dashboard</p>
              </Link>
            ) : (
              <Link to={"/about"} className="text-white no-underline">
                <p className="hover:text-red-400 font-semibold">About</p>
              </Link>
            )}
            {userData.isAdmin ? (
              <Link to={"/newproduct"} className="text-white no-underline">
                <p className="hover:text-red-400 font-semibold">New Product</p>
              </Link>
            ) : (
              <Link to={"/contact"} className="text-white no-underline">
                <p className="hover:text-red-400 font-semibold">Contact</p>
              </Link>
            )}
          </nav>
        </div>

        <div className="flex items-center space-x-10">
          <div className="text-2xl relative text-white">
            <Link to={"cart"} style={{ color: "white", textDecoration: "none" }}>
              <i className="fa-solid fa-cart-shopping text-white"></i>
            </Link>
          </div>

          <div className="relative">
            <button
              className="bg-[#df2020] flex space-x-1 rounded-2xl items-center px-2 py-2 text-white"
              onClick={handleShowMenu}
            >
              <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
                {userData.image ? (
                  <img src={userData.image} className="h-full w-full" alt="user" />
                ) : (
                  <HiOutlineUserCircle />
                )}
              </div>
              <div className="hidden md:block">
                {userData.email ? (
                  <Link to={"login"} className="cursor-pointer text-white px-2 no-underline" onClick={handleLogout}>
                    Logout
                  </Link>
                ) : (
                  <Link to={"login"} className="whitespace-nowrap cursor-pointer px-2 text-white no-underline">
                    Login
                  </Link>
                )}
              </div>
            </button>

            {showMenu && (
              <div
                ref={menuRef}
                className="right-0 bg-yellow-600 border py-2 shadow-lg rounded-md w-48 z-50 md:hidden mt-2 absolute flex font-semibold"
              >
                <nav className="text-base md:text-lg flex flex-col px-4 py-2">
                  <Link to={"/"} className="text-white no-underline">
                    <p className="hover:text-red-400 font-semibold">Home</p>
                  </Link>
                  <Link to={"/menu"} className="text-white no-underline">
                    <p className="hover:text-red-400 font-semibold">Menu</p>
                  </Link>
                  {!userData.isAdmin && (
                    <Link to={"/orders"} className="text-white no-underline">
                      <p className="hover:text-red-400 font-semibold">Orders</p>
                    </Link>
                  )}
                  {userData.isAdmin ? (
                    <Link to={"/dashboard"} className="text-white no-underline">
                      <p className="hover:text-red-400 font-semibold">Dashboard</p>
                    </Link>
                  ) : (
                    <Link to={"/about"} className="text-white no-underline">
                      <p className="hover:text-red-400 font-semibold">About</p>
                    </Link>
                  )}
                  {userData.isAdmin ? (
                    <Link to={"/newproduct"} className="text-white no-underline">
                      <p className="hover:text-red-400 font-semibold">New Product</p>
                    </Link>
                  ) : (
                    <Link to={"/contact"} className="text-white no-underline">
                      <p className="hover:text-red-400 font-semibold">Contact</p>
                    </Link>
                  )}
                  {userData.email ? (
                    <Link to={"/login"} className="text-white no-underline" onClick={handleLogout}>
                      <p className="hover:text-red-400 font-semibold">Logout</p>
                    </Link>
                  ) : (
                    <Link to={"/login"} className="text-white no-underline">
                      <p className="hover:text-red-400 font-semibold">Login</p>
                    </Link>
                  )}
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
