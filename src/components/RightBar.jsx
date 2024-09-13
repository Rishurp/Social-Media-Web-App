import React, { useEffect } from "react";
import axios from "axios";

const RightBar = () => {
  return (
    <div className="w-[40%] max-lg:w-[50%] max-lg:hidden bg-slate-200 dark:bg-zinc-800 max-2xl:hidden">
      {/* <section className=" bg-white suggestion shadow-2xl mt-8 mx-4 p-4 dark:bg-black">
        <p className="text-slate-500 pb-5 ">Suggestions For you</p>
        <div className=" w-full pb-4 suggestion-profile flex justify-between">
          <div className="flex items-center hover:cursor-pointer ">
            <img
              className="w-[40px] h-[40px] rounded-full object-cover"
              src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
            <span className="font-medium text-lg px-3">Rishu</span>
          </div>
          <div className="w-[45%] flex justify-between">
            <button className=" border border-blue-500 rounded-full px-3 py-1 border-solid text-blue-500 hover:bg-blue-200 font-bold">
              Accept
            </button>
            <button className="font-bold text-slate-500 rounded-full px-3 py-1 hover:bg-slate-300">
              Ignore
            </button>
          </div>
        </div>
        <div className=" w-full pb-4 suggestion-profile flex justify-between ">
          <div className="flex items-center hover:cursor-pointer">
            <img
              className="w-[40px] h-[40px] rounded-full object-cover"
              src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
            <span className="font-medium text-lg px-3">Rishu</span>
          </div>
          <div className="w-[45%] flex justify-between">
            <button className=" border border-blue-500 rounded-full px-3 py-1 border-solid text-blue-500 hover:bg-blue-200 font-bold">
              Accept
            </button>
            <button className="font-bold text-slate-500 rounded-full px-3 py-1 hover:bg-slate-300">
              Ignore
            </button>
          </div>
        </div>
      </section> */}

      {/* <section className="Latest-News dark:bg-black bg-white m-4 p-4 shadow-2xl">
        <p className="text-slate-500 pb-5">Latest News</p>

        <div className="w-full hover:cursor-pointer px-4 font-semibold">
          <ul style={{ listStyleType: "disc" }}>
            <li className="pb-2">
              <a href="https://example.com/india-top-25-companies" className="text-blue-600 hover:underline">
                India top 25 companies this year
              </a>
              <p className="text-sm text-slate-400">
                Top news • 37,546 readers{" "}
              </p>
            </li>
            <li className="pb-2">
              <a href="https://example.com/google-cuts-jobs" className="text-blue-600 hover:underline">
                Google cuts jobs in AI push
              </a>
              <p className="text-sm text-slate-400">
                Top news • 37,546 readers{" "}
              </p>
            </li>
            <li className="pb-2">
              <a href="https://example.com/startups-tap-b-school-talent" className="text-blue-600 hover:underline">
                Startups tap B-school talent
              </a>
              <p className="text-sm text-slate-400">
                Top news • 37,546 readers{" "}
              </p>
            </li>
            <li className="pb-2">
              <a href="https://example.com/indian-brands-win-gen-z-hearts" className="text-blue-600 hover:underline">
                Indian brands win Gen Z hearts
              </a>
              <p className="text-sm text-slate-400">
                Top news • 37,546 readers{" "}
              </p>
            </li>
          </ul>

          <button className="p-2 text-slate-500 rounded-full hover:bg-slate-200">
            Read More
          </button>
        </div>
      </section> */}
    </div>
  );
};

export default RightBar;
