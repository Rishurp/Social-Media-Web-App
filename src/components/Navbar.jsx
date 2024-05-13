import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { Link } from "react-router-dom";
import MenuDropDown from "./microComponents/menuDropDown";
const Navbar = ({ theme, handleThemeMode }) => {
  let inputColor = theme === "dark" ? "#FFFFFF" : "inherit";
  const user = localStorage.getItem("Username");

  return (
    <div className="flex dark:bg-black  bg-white  justify-between p-4 w-full border-b  border-b-gray-300 px-10 max-sm:p-2 max-sm:px-1 fixed top-0 z-[1000]">
      <div className="flex justify-around w-[50%] max-lg:w-[70%] items-center  max-sm:w-full ">
        <p className="font-extrabold text-2xl dark:text-white text-blue-700 max-sm:hidden">
          LinkLeap
        </p>
        <span className="font-extrabold text-2xl dark:text-white  text-blue-700 sm:hidden">
          LL
        </span>
        <Link to="/">
          <HomeOutlinedIcon className="hover:cursor-pointer " />
        </Link>

        {theme === " light" ? (
          <button>
            <DarkModeOutlinedIcon
              className="hover:cursor-pointer "
              onClick={handleThemeMode}
            />
          </button>
        ) : (
          <button onClick={handleThemeMode}>
            {" "}
            <LightModeOutlinedIcon className="hover:cursor-pointer" />
          </button>
        )}
        <div className="max-sm:hidden">
          <GridViewOutlinedIcon className="hover:cursor-pointer  " />
        </div>

        <div className="w-[60%] max-sm:w-[40%] max-sm:hidden">
          <TextField
            className=" w-full   "
            id="outlined-search"
            placeholder="Search "
            InputProps={{
              style: {
                color: inputColor,
              },

              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className="dark:text-white" />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>

      <div className="flex justify-around w-[15%] max-lg:w-[30%] items-center max-sm:w-full">
        <div>
          <PermIdentityOutlinedIcon className="hover:cursor-pointer " />
        </div>

        <div>
          <EmailOutlinedIcon className="hover:cursor-pointer" />
        </div>
        <div>
          <NotificationsNoneOutlinedIcon className="hover:cursor-pointer  " />
        </div>
        <div className=" user flex items-center max-md:hidden hover:cursor-pointer">
          <MenuDropDown />
          <span className="font-medium text-lg  px-1.5">{user}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
