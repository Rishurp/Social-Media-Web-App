import React, { useState, useEffect } from "react";
import PostCard from "../../components/Posts/PostCard";
// import AddPost from "../../components/Posts/AddPost";
import axios from "axios";
import { config } from "../../App";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import AddPost from "../../components/Posts/AddPost";

const Home = () => {
  const [postData, setPostData] = useState([]);
  const userid = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const getPost = async () => {
    try {
      const response = await axios.get(
        `${config.backEndpoint}/posts/${userid}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.status === 200) {
        setPostData(
          response.data.sort(
            (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
          )
        );
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        localStorage.clear();
        navigate("/login");
        enqueueSnackbar("Session expired. Please log in again.", {
          variant: "warning",
        });
      } else {
        enqueueSnackbar("Failed to fetch posts", { variant: "error" });
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `${config.backEndpoint}/posts/${id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.status === 200) {
        setPostData(postData.filter((post) => post._id !== id));
        enqueueSnackbar("Post deleted successfully", { variant: "success" });
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        localStorage.clear();
        navigate("/login");
        enqueueSnackbar("Session expired. Please log in again.", {
          variant: "warning",
        });
      } else {
        enqueueSnackbar("Failed to delete post", { variant: "error" });
      }
    }
  };

  const handleUpdate = async (id, postText) => {
    try {
      const payload = { post: postText };
      const response = await axios.patch(
        `${config.backEndpoint}/posts/${id}`,
        payload,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.status === 200) {
        const updatedPost = response.data;
        const updatedPosts = postData.map((post) =>
          post._id === id ? updatedPost : post
        );
        setPostData(updatedPosts);
        enqueueSnackbar("Post updated successfully", { variant: "success" });
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        localStorage.clear();
        navigate("/login");
        enqueueSnackbar("Session expired. Please log in again.", {
          variant: "warning",
        });
      } else {
        enqueueSnackbar("Failed to update the post", { variant: "error" });
      }
    }
  };

  const addNewPost = (newPost) => {
    setPostData([newPost, ...postData]);
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      getPost();
    }
  }, [token]);

  return (
    <div className="bg-slate-200 dark:bg-zinc-800 h-full w-full flex flex-col overflow-y-scroll">
      <AddPost onPostAdded={addNewPost} />
      {postData.length > 0 ? (
        <div>
          {postData.map((post) => (
            <PostCard
              postData={post}
              key={post._id}
              onDeletePost={handleDelete}
              onUpdatePost={handleUpdate}
            />
          ))}{" "}
        </div>
      ) : (
        <div className="text-center my-8">
          <p>No post found</p>{" "}
        </div>
      )}
    </div>
  );
};

export default Home;
