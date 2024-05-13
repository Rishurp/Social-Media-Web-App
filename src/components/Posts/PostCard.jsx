import { React, useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Comment from "./Comment";

const Post = ({ postData }) => {
  const [isLiked, setLike] = useState(false);
  const [isCommentOpen, setCommentOpen] = useState(false);
  const userid = localStorage.getItem("userId");
  const username = localStorage.getItem("Username");

  let handleLike = () => {
    isLiked === true ? setLike(false) : setLike(true);
  };

  const calculateTimeDifference = (timestamp) => {
    const postDate = new Date(timestamp);
    const currentDate = new Date();

    const difference = currentDate.getTime() - postDate.getTime();
    const minutesDifference = Math.floor(difference / (1000 * 60)); // Convert milliseconds to minutes

    return minutesDifference;
  };

  return (
    <div className="flex flex-col  py-4 px-8  max-sm:px-0    ">
      <div className="postCard p-8 m-4 bg-white shadow-lg dark:bg-black dark:text-white rounded-lg ">
        <Link to={`/profile/${userid}`}>
          <div className="userInfo flex items-center">
            <div>
              <img
                src={postData.img}
                className="w-[40px] h-[40px] rounded-full"
              />
            </div>
            <div className="px-2 flex flex-col">
              {username}
              <span className="text-sm ">
                {calculateTimeDifference(postData.timestamp)} minutes ago
              </span>
            </div>
          </div>
        </Link>

        <div className="pt-4">{postData.post}</div>

        {postData.img && (
          <div className="pt-4">
            <img
              className="w-full max-h-[500px] object-cover"
              src={postData.img}
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
              <span className="px1"> 14 Comments</span>
            </button>
          </div>
          <div className="px-2">
            <button>
              <ShareOutlinedIcon />
              <span className="px-1">Share</span>
            </button>
          </div>
        </div>

        <div>{isCommentOpen && <Comment />}</div>
      </div>
    </div>
  );
};

export default Post;
