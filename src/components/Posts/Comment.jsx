import React, { useState } from "react";
import ReactTimeAgo from "react-time-ago";
import { config } from "../../App";
import userImage from "../../assets/user.png";
import axios from "axios";
// let commentInfo = [
//   {
//     id: 1,
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
//     name: "John Doe",
//     userId: 1,
//     profilePicture:
//       "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
//   {
//     id: 2,
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
//     name: "Jane Doe",
//     userId: 2,
//     profilePicture:
//       "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
//   },
// ];

const Comment = ({ comments, postid, onCommentAdded }) => {
  let user = localStorage.getItem("Username");
  let [newComment, setNewComment] = useState("");

  let handleComment = (event) => {
    setNewComment(event.target.value);
  };

  const postComment = async (postid, newComment) => {
    let payload = {
      postid: postid,
      comment: newComment,
    };
    try {
      let response = await axios.post(
        `${config.backEndpoint}/posts/comment`,
        payload
      );
      console.log(response);
      onCommentAdded(response.data);
      setNewComment("");
    } catch (err) {
      return err;
    }
  };

  const addNewComment = () => {
    postComment(postid, newComment);
  };

  //console.log("These are the comments:", JSON.stringify(comments, null, 2));
  return (
    <section className="flex flex-col py-4 w-full ">
      <div className="input-comment-section flex items-center">
        <img
          className="w-[40px] h-[40px] rounded-full object-cover"
          src={userImage}
        />
        <div className="px-2 w-full ">
          <input
            className="border p-1.5 border-gray-400 w-[85%] dark:bg-black  "
            type="text"
            onChange={handleComment}
            placeholder="write a comment  "
          />
          <button
            type="submit"
            onClick={addNewComment}
            className="bg-blue-400 text-white font-semibold mx-3 w-[10%] py-1.5 hover:bg-blue-800 hover:text-white "
          >
            send
          </button>
        </div>
      </div>

      {comments.map((comment) => {
        return (
          <div
            key={comment._id}
            className="user-info flex items-center  py-4  "
          >
            <div>
              <img
                className="w-[40px] h-[40px] rounded-full"
                src={userImage}
                alt={user}
              />
            </div>
            <div className="px-2 w-[70%]">
              <span>{user}</span>
              <p>{comment.comment}</p>
            </div>
            <span>
              {" "}
              {<ReactTimeAgo date={comment.timestamp} locale="en-US" />}
            </span>
            <div className="p-2">
              {/* <button className=" py-1 px-1 text-white rounded-sm bg-red-400">
                Delete
              </button> */}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Comment;
