import React from "react";

let commentInfo = [
  {
    id: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
    name: "John Doe",
    userId: 1,
    profilePicture:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
    name: "Jane Doe",
    userId: 2,
    profilePicture:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const Comment = () => {
  return (
    <section className="flex flex-col py-4 w-full ">
      <div className="input-comment-section flex items-center">
        <img
          className="w-[40px] h-[40px] rounded-full object-cover"
          src="//images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
        <div className="px-2 w-full ">
          <input
            className="border p-1.5 border-gray-400 w-[85%] dark:bg-black  "
            type="text"
            placeholder="write a comment  "
          />
          <button className="bg-blue-400 text-white font-semibold mx-3 w-[10%] py-1.5 hover:bg-blue-800 hover:text-white ">
            send
          </button>
        </div>
      </div>

      {commentInfo.map((comment) => {
        return (
          <div className="user-info flex items-center  py-4  ">
            <div>
              <img
                className="w-[40px] h-[40px] rounded-full"
                src={comment.profilePicture}
                alt={comment.name}
              />
            </div>
            <div className="px-2 w-[70%]">
              <span>{comment.name}</span>
              <p>{comment.desc}</p>
            </div>
            <span>1 hour ago</span>
          </div>
        );
      })}
    </section>
  );
};

export default Comment;
