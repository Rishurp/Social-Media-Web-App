import React, { useRef, useState } from "react";
import PhotoIcon from "@mui/icons-material/Photo";
import MapIcon from "@mui/icons-material/Map";
import SellIcon from "@mui/icons-material/Sell";
import axios from "axios";
import { config } from "../../App";
import { useSnackbar } from "notistack";

const AddPost = ({ onPostAdded }) => {
  let [post, setPost] = useState("");
  let { enqueueSnackbar } = useSnackbar();
  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const imageRef = useRef(null);
  const userid = localStorage.getItem("userId");

  const handlePost = async (event) => {
    setPost(event.target.value);
    console.log(post);
  };

  const addPost = async (post, userid) => {
    const formData = new FormData();
    formData.append("post", post);
    formData.append("userid", userid);
    if (imageFile) {
      formData.append("image", imageFile);
    }
    let response = await axios.post(`${config.backEndpoint}/posts`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response);
    if (response.status === 200) {
      enqueueSnackbar("Congratulations your post uploaded successfully ");
      onPostAdded(response.data); // Pass the newly added post data to the parent
      setPost(""); // Clear the post input field
      setImageFile(null);
      setPreviewImage(null);
    } else {
      enqueueSnackbar("Something went wrong");
    }
  };

  const handleSharePost = async () => {
    addPost(post, userid);
  };

  const handleUploadClick = () => {
    console.log(imageRef.current.click() + "this is image ref");
    imageRef.current.click();
  };

  const handleImageUpload = (event) => {
    let file = event.target.files[0];
    setImageFile(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  console.log(imageFile);
  console.log(previewImage);

  return (
    <div className="flex flex-col  py-4 px-8 max-sm:px-0  ">
      <div className="postCard p-8 m-4 bg-white shadow-lg dark:bg-black dark:text-white rounded-lg">
        <div className="flex items-center">
          <img
            className="w-[40px] h-[40px] rounded-full object-cover "
            src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
          />
          <input
            className="px-2 py-6 w-full outline-none dark:bg-black "
            type="text"
            placeholder="What's on your mind Rishu? "
            onChange={handlePost}
            value={post}
          />
        </div>
        <div className="pt-2 pb-6 flex justify-center">
          <img
            className="max-h-[400px] w-full object-contain"
            src={previewImage}
          />
        </div>
        <hr></hr>
        <div className="share-options py-3  flex justify-between items-center ">
          <div className=" flex justify-between ">
            <div onClick={handleUploadClick} className="px-2">
              <button>
                <PhotoIcon className="text-blue-900" />
                <input
                  onChange={handleImageUpload}
                  className="hidden"
                  ref={imageRef}
                  type="file"
                />
                <span className="text-gray-500 px-1 max-sm:hidden">
                  Add Images
                </span>
              </button>
            </div>
            <div className="px-2">
              <MapIcon className="text-blue-900" />
              <span className="text-gray-500 px-1 max-sm:hidden">
                Add Places
              </span>
            </div>
            <div className="px-2">
              <SellIcon className="text-blue-900" />
              <span className="text-gray-500 px-1 max-sm:hidden">
                Tag Friends
              </span>
            </div>
          </div>
          <button
            type="submit"
            onClick={handleSharePost}
            className="bg-blue-500 px-3 py-1.5 rounded-sm text-white hover:bg-blue-800"
          >
            share
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
