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
    setShowMenu((preve) => !preve);
    setTimeout(() => {
      setShowMenu((preve) => !preve);
  }, 2000);
  };

  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Logout successfully");
  };
  
  return (
    <header className="shadow-md h-24 md:px-32 px-16 fixed z-10 w-full bg-maincolor text-white ">
      <div className="flex items-center h-full justify-between">
        <Link to={""} className="no-underline">
          <div className="h-10">
            <h3 className="flex text-white">
              TASTY<h3 className="text-[#df2020]">TREATS</h3>
            </h3>
          </div>
        </Link>

        <div className="flex items-center">
          <nav className="text-base md:text-lg hidden md:flex space-x-12">
          <a href={"/"}  className="text-white no-underline"><p className="hover:text-red-400">Home</p></a>
          <a href={"menu"} className="text-white no-underline">Menu</a>
          <a href={"about"} className="text-white no-underline">About</a>
          <a href={"/contact"} className="text-white no-underline">Contact</a>
          </nav>
        </div>

        <div className="flex items-center space-x-10">
          <div className="text-2xl relative text-white">
            <Link to={"cart"} style={{ color: "white", textDecoration: "none" }}>
             <i class="fa-solid fa-cart-shopping text-white "></i>
            </Link>
          </div>

          <div className="relative">
            <button className="bg-[#df2020] flex space-x-1 rounded-2xl items-center px-2 py-2 text-white" onClick={handleShowMenu} >
                <div className=" text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
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
              <div ref={menuRef} className="right-0  bg-white border border-gray-200 py-2 shadow-lg rounded-md w-48 z-50 md:hidden mt-2 absolute" >
                <nav className="text-base md:text-lg flex flex-col">
                  <Link to={""} className="px-4 py-2 hover:bg-gray-100">
                    Home
                  </Link>
                  <Link to={"menu"} className="px-4 py-2 hover:bg-gray-100">
                    Menu
                  </Link>
                  <Link to={"about"} className="px-4 py-2 hover:bg-gray-100">
                    About
                  </Link>
                  <Link to={"contact"} className="px-4 py-2 hover:bg-gray-100">
                    Contact
                  </Link>
                  {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                    <Link to={"newproduct"} className="whitespace-nowrap cursor-pointer px-4 py-2 hover:bg-gray-100">
                      New Product
                    </Link>
                  )}
                  {userData.email ? (
                    <Link
                      to={"login"}
                      className="cursor-pointer text-black px-4 py-2 hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      Logout
                    </Link>
                  ) : (
                    <Link to={"login"} className="whitespace-nowrap cursor-pointer px-4 py-2 hover:bg-gray-100">
                      Login
                    </Link>
                  )}
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
