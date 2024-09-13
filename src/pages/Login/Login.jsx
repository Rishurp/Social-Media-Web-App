import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { config } from "../../App";
import axios from "axios";
import { useSnackbar } from "notistack";

const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (email, password) => {
    const data = {
      email: email,
      password: password,
    };
    if (validateInput(data) !== "") {
      enqueueSnackbar(validateInput(data));
      return;
    } else {
      try {
        let response = await axios.post(
          `${config.backEndpoint}/auth/login`,
          data
        );

        console.log(response);
        if (response.status === 200) {
          navigate("/");
          persistLogin(response.data);
          console.log(response);
          enqueueSnackbar("Login Successfully.");
        }
      } catch (err) {
        enqueueSnackbar("Wrong Credentials.");
        return err;
      }
    }
  };

  const validateInput = (data) => {
    if (data.email === "") {
      return "Email is a required field";
    } else if (data.password === "") {
      return "Password is a required field";
    } else if (data.password.length < 6) {
      return "Password must be at least 5 characters";
    } else return "";
  };

  const handleInputChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleLogin = async () => {
    await login(email, password);
  };

  const persistLogin = (loginData) => {
    localStorage.setItem("Username", loginData.response.name);
    localStorage.setItem("userId", loginData.response._id);
    localStorage.setItem("token", loginData.token);
  };

  return (
    <div className="login bg-[#C1BEFF] h-[100vh]  flex justify-center items-center p-12">
      <div className="card rounded-xl p-4 max-sm:p-2 flex w-[50vw] flex-col md:flex-row h-[60vh] max-sm:w-[80vw]  max-lg:w-[70vw] max-2xl:w-[80vw]   overflow-y-auto">
        <div className="left relative w-full h-full overflow-y-auto ">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="pic"
            />
          </div>
          <div className="absolute bg-gradient-to-r from-[rgb(39,11,96)] to-[rgb(39,11,96)] opacity-50 inset-0" />
          <section className="w-full h-full absolute text-white flex flex-col justify-center items-left p-8 max-sm:p-3 max-lg:p-4  ">
            <div className="pb-2 ">
              <h1 className="font-extrabold text-6xl max-md:text-lg ">
                Hola Amigo.
              </h1>
            </div>
            <div className=" max-md:hidden">
              <h3>
                Connect and engage effortlessly with our social media login!
                Sign in seamlessly with your favorite social platform and join
                our vibrant community.
              </h3>
            </div>

            <div className="registerbtn pb-8  max-sm:pb-2">
              <h3>Don't you have an account ?</h3>
              <div className="pt-4  ">
                <Link to="/register">
                  <button className=" bg-white text-black px-3  rounded hover:text-white hover:bg-violet-400 font-semibold  ">
                    Register Now
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>

        <div className="right w-full h-full bg-white flex flex-col justify-center items-left p-6   max-sm:p-3 ">
          <div className="pb-12 max-sm:pb-4">
            <h3 className=" text-3xl font-bold text-zinc-600  max-md:text-2xl">
              Login
            </h3>
          </div>
          <div className="text-slate-500">
            <div className=" pb-8  ">
              <input
                className=" w-[70%] border-b border-b-slate-300  outline-none p-1 "
                onChange={handleInputChange}
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                id=""
              />
            </div>
            <div className=" pb-8">
              <input
                className=" w-[70%] border-b border-b-slate-300 outline-none p-1 "
                onChange={handleInputChange}
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                id=""
              />
            </div>
            <div>
              <button
                type="submit"
                onClick={handleLogin}
                className=" text-white bg-violet-400 px-4 font-bold  hover:bg-violet-900 rounded-sm"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
