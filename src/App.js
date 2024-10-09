import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import "./index.css";
import Navbar from "./components/Navbar";
import RightBar from "./components/RightBar";
import LeftBar from "./components/LeftBar";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const config = {
  backEndpoint: "https://social-media-web-app-backend.onrender.com/v1",
};

function App() {
  const [theme, setTheme] = useState(() => {
    let themeMode = localStorage.getItem("themeMode");
    return themeMode ? themeMode : false;
  });
  const user = localStorage.getItem("Username");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("themeMode", theme);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeMode = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.removeItem("themeMode");
    } else {
      setTheme("dark");
    }
  };

  const ProtectRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const Layout = () => {
    return (
      <div className="  bg-white  h-full w-full flex flex-col dark:bg-black dark:text-white  ">
        <Navbar theme={theme} handleThemeMode={handleThemeMode} />
        <div className="grow flex w-full h-full pt-20 ">
          <LeftBar />
          <Outlet />
          <RightBar />
        </div>
      </div>
    );
  };

  return (
    <div className="App h-full w-full  ">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectRoute>
              <Layout />
            </ProtectRoute>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
