import Header from "./component/Header";
import { Outlet } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import Footer from "./component/footer";
import { loginRedux } from "./redux/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  // Function to check if a token is expired
  function isTokenExpired(token) {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp < Date.now() / 1000;
  }

  // Function to handle logout
  const handleLogout = async () => {
    const user = localStorage.getItem("user");
    if (user) {
      const fdata = JSON.parse(user); // Parse JSON string to object
      try {
        const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/user/logout`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: 'include',
          body: JSON.stringify(fdata)
        });
        const result = await fetchData.json();
        toast(result.message);
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      } catch (error) {
        toast("Failed to logout");
      }
    }
  };

  // Effect to handle authentication on component mount
  useEffect(() => {
    async function authenticate() {
      try {
        const loggedInUser = localStorage.getItem("user");
        const accessToken = localStorage.getItem("accessToken");
        const refreshToken = localStorage.getItem("refreshToken");

        if (loggedInUser) {
          if (isTokenExpired(accessToken)) {
            if (!isTokenExpired(refreshToken)) {
              const resData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/user/newToken`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                credentials: 'include',
                body: JSON.stringify({ refreshToken })
              });
              const dataRes = await resData.json();
              if (dataRes.alert) {
                localStorage.setItem("accessToken", dataRes.data.newaccessToken);
                const foundUser = JSON.parse(loggedInUser);
                dispatch(loginRedux(foundUser));
              } else {
                handleLogout();
              }
            } else {
              handleLogout();
            }
          } else {
            const foundUser = JSON.parse(loggedInUser);
            dispatch(loginRedux(foundUser));
          }
        }
      } catch (error) {
        console.log(error);
      }
    }

    authenticate();
  }, [dispatch]);

  return (
    <>
      <Toaster />
      <div>
        <Header />
        <main className="pt-20 min-h-[calc(100vh)]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
