import React, { useState, useEffect } from "react";
import PostCard from "../../components/Posts/PostCard";
import AddPost from "../../components/Posts/AddPost";
import axios from "axios";
import { config } from "../../App";

const Home = () => {
  const [postData, setPostData] = useState([]);
  const userid = localStorage.getItem("userid");
  // const post = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     userId: 1,
  //     profilePic:
  //       "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Doe",
  //     userId: 2,
  //     profilePic:
  //       "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
  //   },
  // ];

  const getData = async () => {
    let response = await axios.get(`${config.backEndpoint}/posts/${userid}`);
    console.log(response);
    if (response.status === 200) {
      setPostData(response.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-slate-200 dark:bg-zinc-800 h-full w-full flex flex-col    ">
      <AddPost />
      {postData.map((postData) => {
        return <PostCard postData={postData} key={postData._id} />;
      })}
    </div>
  );
};

export default Home;
