import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { config } from "../../App";
import axios from "axios";
import { useSnackbar } from "notistack";

const Register = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const register = async (username, email, password) => {
    let formData = {
      username: username,
      email: email,
      password: password,
    };

    // console.log(validateInput(formData) !== "");
    if (validateInput(formData) !== "") {
      enqueueSnackbar(validateInput(formData));
    } else {
      try {
        let response = await axios.post(
          `${config.backEndpoint}/auth/register`,
          formData
        );
        setUsername("");
        setPassword("");
        setEmail("");
        setConfirmPassword("");

        if (response.status === 201) {
          enqueueSnackbar("Registered successfully");
          navigate("/login");
        } else {
          enqueueSnackbar("Something went wrong");
        }
        console.log(response);
      } catch (err) {
        enqueueSnackbar(err.message);
        return err;
      }
    }
  };

  const handleInput = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
    if (e.target.name === "confirmPassword") {
      setConfirmPassword(e.target.value);
    }
  };

  const validateInput = (data) => {
    if (data.username === "") {
      return "Username is a required field";
    } else if (data.username.length < 6) {
      return "Username must be at least 6 characters";
    } else if (data.password === "") {
      return "Password is a required field";
    } else if (data.email === "") {
      return "email is a required field";
    } else if (data.password.length < 6) {
      return "Password must be at least 6 characters";
    } else if (data.password !== confirmPassword) {
      return "Passwords do not match";
    } else return "";
  };

  const handleRegister = async () => {
    register(username, email, password);
  };

  return (
    <div className="register bg-[#C1BEFF] h-[100vh]  flex justify-center items-center p-12">
      <div className="card rounded-xl p-4 max-sm:p-2 flex w-[50vw] flex-col md:flex-row h-[60vh] max-sm:w-[80vw]  max-lg:w-[70vw] max-2xl:w-[80vw]   overflow-y-auto">
        <div className="left w-full h-full bg-white flex flex-col justify-center items-left p-6   max-sm:p-2 max-lg:p-4">
          <div className="pb-6  max-sm:pb-3">
            <h3 className=" text-3xl font-bold text-zinc-600  max-md:text-2xl">
              Register
            </h3>
          </div>
          <div className="text-slate-500">
            <div className=" pb-6 max-sm:pb-3  ">
              <input
                onChange={handleInput}
                className=" w-[70%] border-b border-b-slate-300  outline-none p-1 "
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                id=""
              />
            </div>

            <div className=" pb-6 max-sm:pb-3  ">
              <input
                onChange={handleInput}
                className=" w-[70%] border-b border-b-slate-300  outline-none p-1 "
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                id=""
              />
            </div>
            <div className=" max-sm:pb-3 pb-6">
              <input
                onChange={handleInput}
                className=" w-[70%] border-b border-b-slate-300 outline-none p-1 "
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                id=""
              />
            </div>
            <div className="max-sm:pb-3 pb-6  ">
              <input
                onChange={handleInput}
                className=" w-[70%] border-b border-b-slate-300  outline-none p-1 "
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={confirmPassword}
                id=""
              />
            </div>

            <div>
              <button
                type="submit"
                onClick={handleRegister}
                className=" text-white bg-violet-400 px-6 font-bold  hover:bg-violet-900 rounded-sm"
              >
                Register
              </button>
            </div>
          </div>
        </div>

        <div className="right relative w-full h-full overflow-y-auto ">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
          </div>
          <div className="absolute bg-gradient-to-r from-[rgb(39,11,96)] to-[rgb(39,11,96)] opacity-50 inset-0" />
          <section className="w-full h-full absolute text-white flex flex-col justify-center items-left p-8 max-sm:p-3 max-lg:p-4  ">
            <div className="pb-2 ">
              <h1 className="font-extrabold text-6xl max-md:text-lg max-lg:text-3xl ">
                LinkLeap
              </h1>
            </div>
            <div className=" max-md:hidden">
              <h3>
                Connect and engage effortlessly with our social media login!
                Sign in seamlessly with your favorite social platform and join
                our vibrant community.
              </h3>
            </div>

            <div className="registerbtn pb-8  max-sm:pb-2 ">
              <h3>Already have a account ?</h3>
              <div className="pt-4 ">
                <Link to="/login">
                  <button className=" bg-white text-black px-3 rounded hover:text-white hover:bg-violet-400 font-semibold ">
                    Login Now
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Register;
