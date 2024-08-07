import React, { useState } from "react";
import loginSignupImage from "../assest/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loginRedux } from "../redux/userSlice";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    if (!email) {
      toast("Please enter a valid Gmail address");
      return;
    }

    if (email && password) {
      try {
        const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/users/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const dataRes = await fetchData.json();
        if (!dataRes.alert) {
          toast(dataRes.data);
          navigate("/login");
        } else {
          toast("Logged in Successfully");
          dispatch(loginRedux(dataRes.data.user));
          localStorage.setItem("user", JSON.stringify(dataRes.data.user));
          localStorage.setItem("accessToken", dataRes.data.accessToken);
          localStorage.setItem("refreshToken", dataRes.data.refreshToken);
          navigate("/");
        }
      } catch (error) {
        toast("Login failed");
      }
    } else {
      toast("Please enter the required fields");
    }
  };

  return (
    <div className="p-3 mt-20 md:p-4">
      <div className="w-full max-w-sm bg-maincolor m-auto flex flex-col p-4 rounded-2xl">
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto">
          <img src={loginSignupImage} className="w-full" alt="login animation"/>
        </div>

        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="email"><span className="text-white">Email</span></label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.email}
            onChange={handleOnChange}
          />

          <label htmlFor="Password"><span className="text-white">Password</span></label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full bg-slate-200 border-none outline-none"
              value={data.password}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <div className="flex items-center">
            <button className="w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">
              Login
            </button>
            <button className="w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">
              <Link to={"/signup"} className="text-white no-underline">
                Sign Up
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
