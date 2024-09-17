import React from "react";
import userImage from "../../assets/user.png";

const SearchList = ({ userData }) => {
  return (
    <div className=" absolute left-0 top-full mt-2 bg-slate-500 rounded-sm w-full text-white z-50 ">
      {" "}
      {/* Use absolute and top-full */}
      {userData.map(
        (
          user,
          index // Map through search results
        ) => (
          <div
            key={index}
            className="flex items-center p-2 hover:bg-slate-600 rounded-sm border-b-[1.5px]  "
          >
            <img
              src={userImage}
              alt="username"
              className="w-[40px] h-[40px] rounded-full mr-2"
            />
            <p>{user.name}</p>
          </div>
        )
      )}
    </div>
  );
};

export default SearchList;
