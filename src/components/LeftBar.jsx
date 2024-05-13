import React from "react";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";
import Diversity3TwoToneIcon from "@mui/icons-material/Diversity3TwoTone";
import MarkunreadTwoToneIcon from "@mui/icons-material/MarkunreadTwoTone";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import DynamicFeedTwoToneIcon from "@mui/icons-material/DynamicFeedTwoTone";

const LeftBar = () => {
  const user = localStorage.getItem("Username");

  return (
    <div className="w-[25%]  p-6 flex flex-col max-sm:hidden  ">
      <section className=" border-b  border-slate-300 ">
        <div className="flex items-center py-4 hover:cursor-pointer">
          <img
            className="w-[40px] h-[40px] rounded-full object-cover"
            src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
          />
          <span className="font-medium text-lg px-3">{user}</span>
        </div>
        <div className="flex py-4 items-center hover:cursor-pointer">
          <PeopleAltTwoToneIcon />
          <span className="px-4 font-medium text-lg ">Friends</span>
        </div>
        <div className="flex py-4 items-center hover:cursor-pointer ">
          <Diversity3TwoToneIcon />
          <span className="px-4 font-medium text-lg">Groups</span>
        </div>
      </section>
      <section className=" flex py-4 flex-col justify-around w-full ">
        <span> Your shortcuts</span>

        <div className="flex py-4 items-center hover:cursor-pointer">
          <MarkunreadTwoToneIcon />
          <span className="px-4 font-medium text-lg">Messages</span>
        </div>
        <div className="flex py-4 items-center hover:cursor-pointer">
          <CalendarMonthTwoToneIcon />
          <span className="px-4 font-medium text-lg">Events</span>
        </div>
        <div className="flex py-4 items-center hover:cursor-pointer">
          <DynamicFeedTwoToneIcon />
          <span className="px-4 font-medium text-lg">Posts</span>
        </div>
      </section>
    </div>
  );
};

export default LeftBar;
