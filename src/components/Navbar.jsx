import React, { useEffect, useRef, useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
// import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
// import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { Link } from "react-router-dom";
import MenuDropDown from "./microComponents/menuDropDown";
import axios from "axios";
import { config } from "../App";
import userImage from "../assets/user.png";
import SearchList from "../components/microComponents/SearchList";

const Navbar = ({ theme, handleThemeMode }) => {
  let inputColor = theme === "dark" ? "#FFFFFF" : "inherit";
  const user = localStorage.getItem("Username");

  const [searchUserData, setSearchUserData] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [timerId, setTimerId] = useState(null);
  const [searchKey, updateSearchKey] = useState("");

  const performSearch = async () => {
    try {
      let response = await axios.get(
        `${config.backEndpoint}/users/search/user?username=${searchKey}`
      );
      setSearchUserData(response.data);

      console.log(response.data);
    } catch {
      console.log("error");
    }
  };

  const handleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  useEffect(() => {
    if (!searchKey) {
      setSearchUserData([]);
      setIsSearchOpen(false);
    } else {
      clearTimeout(timerId);
    }
    const debounceTimerId = setTimerId(() => performSearch(), 200);
    setSearchUserData(debounceTimerId);
  }, [searchKey]);

  return (
    <div className="flex dark:bg-black bg-white justify-between p-4 w-full border-b border-b-gray-300 px-10 max-sm:p-2 max-sm:px-1 fixed top-0 z-[1000]">
      <div className="flex justify-around w-[70%] md:w-[50%] items-center max-sm:w-full">
        <p className="font-extrabold text-2xl dark:text-white text-blue-700 max-sm:hidden max-lg:hidden">
          LinkLeap
        </p>
        <span className="font-extrabold text-2xl dark:text-white text-blue-700 sm:hidden">
          LL
        </span>
        <Link to="/">
          <HomeOutlinedIcon className="hover:cursor-pointer" />
        </Link>

        {theme === "light" ? (
          <button>
            <DarkModeOutlinedIcon
              className="hover:cursor-pointer"
              onClick={handleThemeMode}
            />
          </button>
        ) : (
          <button onClick={handleThemeMode}>
            <LightModeOutlinedIcon className="hover:cursor-pointer" />
          </button>
        )}
        {/* <div className="max-sm:hidden">
          <GridViewOutlinedIcon className="hover:cursor-pointer" />
        </div> */}

        <div className="w-[60%] md:w-[40%] max-sm:hidden relative">
          {" "}
          {/* Add relative positioning */}
          <TextField
            className="w-full"
            id="outlined-search"
            value={searchKey}
            placeholder="Search"
            onChange={(event) => updateSearchKey(event.target.value)}
            onClick={handleSearch}
            InputProps={{
              style: {
                color: inputColor,
                border: "1px solid",
              },

              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className="dark:text-white" />
                </InputAdornment>
              ),
            }}
          />
          {isSearchOpen  ? (searchUserData && <SearchList userData={searchUserData} />) : ""}
          {/* Conditionally render */}
        </div>
      </div>
      <div className="flex justify-around w-[50%] lg:w-[30%] items-center max-sm:w-full">
        {/* <div>
          <PermIdentityOutlinedIcon className="hover:cursor-pointer" />
        </div> */}
        {/* <div>
          <EmailOutlinedIcon className="hover:cursor-pointer" />
        </div> */}
        {/* <div>
          <NotificationsNoneOutlinedIcon className="hover:cursor-pointer" />
        </div> */}
        <div className="user flex items-center max-md:hidden hover:cursor-pointer">
          <MenuDropDown />
          <span className="font-medium text-lg px-1.5">{user}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
