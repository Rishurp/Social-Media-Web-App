import React, { useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import PostCard from "../../components/Posts/PostCard";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import GitHubIcon from "@mui/icons-material/GitHub";
import AddPost from "../../components/Posts/AddPost";
import axios from "axios";
import config from "../../App";

const Profile = () => {
  //[ const [postData, setPostData] = useState([]);]
  const post = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Jane Doe",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];

  // const getData = async () => {
  //   let response = await axios.get(`${config.backendEndpint}/posts`);
  //   console.log(response);
  //   if (response.status === 200) {
  //     setPostData(response.data);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, [postData]);

  return (
    <div className="bg-slate-200 dark:bg-zinc-800 h-full w-full  flex flex-col ">
      <div>
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="h-full w-full max-h-[350px] rounded-md "
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          className="w-[200px] h-[200px] rounded-full   absolute left-0 right-[125px] m-auto top-[300px] max-sm:absolute max-sm:top-[200px] max-sm:right-0 z-[999]"
          alt=""
        />

        <div className="profile-Info  px-8  max-sm:p-0">
          <div className="p-8 pt-14 px-8 max-sm:px-6 m-4 bg-white dark:bg-black dark-text-white rounded-lg flex flex-col justify-center items-center">
            <div>
              <span className="text-3xl font-semibold">Jane Doe</span>
            </div>
            <div className="flex justify-around py-2 w-full">
              <div className="flex">
                <div className="px-2 text-blue-600">
                  <LinkedInIcon />
                </div>
                <div className="px-2 text-blue-600">
                  <FacebookTwoToneIcon />
                </div>
                <div className="px-2">
                  <GitHubIcon />
                </div>
              </div>

              <div className=" text-red-600 max-sm:hidden">
                <LocationOnIcon />
                <span className="text-black dark:text-white"> New York</span>
              </div>
              <div>
                <LanguageIcon />
                <span className="px-1">jane.dev</span>
              </div>

              <div className="flex">
                <div className="px-2">
                  <MailOutlineIcon />
                </div>
                <div>
                  <MoreVertIcon />
                </div>
              </div>
            </div>
            <div>
              <button className=" px-3 py-1 rounded-md text-white hover:bg-blue-800 bg-blue-500">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>

      <AddPost />
      {post.map((postData) => {
        return <PostCard postData={postData} key={postData.id} />;
      })}
    </div>
  );
};

export default Profile;
