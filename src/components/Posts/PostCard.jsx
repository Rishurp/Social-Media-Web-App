import { React, useState, useEffect } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Comment from "./Comment";
import ReactTimeAgo from "react-time-ago";
import { config } from "../../App";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import userImage from "../../assets/user.png";
import axios from "axios";

const Post = ({ postData, onDeletePost, onUpdatePost }) => {
  const [isLiked, setLike] = useState(false);
  const [isCommentOpen, setCommentOpen] = useState(false);
  const userid = localStorage.getItem("userId");
  const username = localStorage.getItem("Username");
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdate, setUpdate] = useState(false);
  const [postText, setPostText] = useState(postData.post);

  const [comments, setComment] = useState([]);

  const getComment = async () => {
    try {
      let response = await axios.get(
        `${config.backEndpoint}/posts/comment/${postData._id}`
      );
      console.log(response.data);
      setComment(response.data);
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    getComment();
  }, []);

  const addNewComment = (newComments) => {
    setComment((prevComments) => [newComments, ...prevComments]);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDelete = () => {
    onDeletePost(postData._id);
  };

  const handleEdit = () => {
    setUpdate(true);
  };

  const handleUpdate = () => {
    setUpdate(false);
    onUpdatePost(postData._id, postText);
  };

  let handleLike = () => {
    isLiked === true ? setLike(false) : setLike(true);
  };

  return (
    <div className="flex flex-col  py-4 px-8  max-sm:px-0">
      <div className="postCard p-8 m-4 bg-white shadow-lg dark:bg-black dark:text-white rounded-lg ">
        <div className="flex justify-between">
          <Link to={`/profile/${userid}`}>
            <div className="userInfo flex items-center">
              <div>
                <img
                  src={userImage}
                  className="w-[40px] h-[40px] rounded-full"
                  alt="userImage"
                />
              </div>
              <div className="px-2 flex flex-col">
                {username}.
                <span className="text-sm ">
                  {<ReactTimeAgo date={postData.timestamp} locale="en-US" />}
                </span>
              </div>
            </div>
          </Link>

          <div className="px-2">
            <button onClick={toggleDropdown}>
              <MoreVertIcon />
            </button>

            {isOpen && (
              <ul className="list-none absolute outline-none bg-white shadow-lg text-left rounded ">
                <li
                  onClick={handleDelete}
                  className="  px-1  py-1 rounded   hover:cursor-pointer hover:bg-red-600 hover:text-white"
                >
                  <span className="max-md:hidden">Delete post</span>
                  <span className="md:hidden">Delete</span>
                </li>

                <li
                  onClick={handleEdit}
                  className="   px-1  py-1 rounded hover:cursor-pointer hover:bg-red-600 hover:text-white "
                >
                  <span className="max-md:hidden">Edit post</span>
                  <span className="md:hidden">Edit</span>
                </li>
              </ul>
            )}
          </div>
        </div>
        {isUpdate ? (
          <div>
            <input
              type="text"
              onChange={(event) => setPostText(event.target.value)}
              value={postText}
              className="px-2 pt-4 pb-2 w-full outline-none dark:bg-black "
            />
            <hr></hr>
            <div className="flex justify-between">
              <div></div>
              <div className="pt-2">
                <button
                  className="bg-blue-500 px-3 py-1.5 rounded-sm text-white hover:bg-blue-800"
                  type="submit"
                  onClick={handleUpdate}
                >
                  Update Post
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="pt-4">{postData.post}</div>
        )}

        {postData.image && (
          <div className="pt-4">
            <img
              className="w-full max-h-[500px] object-cover"
              src={config.backEndpoint + "/" + postData.image}
              alt={postData._Id}
            />
          </div>
        )}

        <div className="Choices pt-4 flex items-center">
          <div className="">
            <button onClick={handleLike}>
              {isLiked ? (
                <FavoriteIcon className="text-red-700" />
              ) : (
                <FavoriteBorderOutlinedIcon />
              )}
              <span className="px-1"> 12 Likes</span>
            </button>
          </div>
          <div className="px-2">
            <button onClick={() => setCommentOpen(!isCommentOpen)}>
              <SmsOutlinedIcon />
              <span className="px1"> {comments.length} Comments</span>
            </button>
          </div>
          <div className="px-2">
            <button>
              <ShareOutlinedIcon />
              <span className="px-1">Share</span>
            </button>
          </div>
        </div>

        <div>
          {isCommentOpen && (
            <Comment
              postid={postData._id}
              comments={comments}
              onCommentAdded={addNewComment}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
