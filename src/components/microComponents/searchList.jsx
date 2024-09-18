import React from "react";
import userImage from "../../assets/user.png";
import { useNavigate } from "react-router-dom";

const SearchList = ({ userData }) => {
  const navigate = useNavigate();
  return (
    <div className=" absolute left-0 top-full mt-2 bg-slate-500 rounded-sm w-full text-white z-50 ">
      {" "}
      {userData.map((user, index) => (
        <div
          key={index}
          className="flex items-center p-2 hover:bg-slate-600 rounded-sm border-b-[1.5px] cursor-pointer"
          onClick={() => {
            navigate(`/profile/${user._id}`);
            localStorage.setItem("searchUser", user._id);
            
          }}
        >
          <img
            src={userImage}
            alt="username"
            className="w-[40px] h-[40px] rounded-full mr-2"
          />
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchList;
