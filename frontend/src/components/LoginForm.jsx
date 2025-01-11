import React, { useState } from "react";
import google from "../assets/google_color.svg";
import { useNavigate } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/authSlice";

const LoginForm = () => {
  const [formType, setFormType] = useState("login");
  const dispatch = useDispatch();
  const blankForm = {
    username: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleDataInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const handleSubmit = async () => {
    if (formType == "login") {
      const { email, password } = formData;
      if (email == " " || password == " ") {
        alert("All fields are required");
      } else {
        const response = await axios.post("http://localhost:3000/login", {
          email,
          password,
        });
        const { user, accestoken } = response.data;

        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", accestoken);

        dispatch(signIn(user.username));
        setFormData(blankForm);
        alert("Login successful");
        navigate("/");
      }
    } else {
      if (
        formData.username == "" ||
        formData.email == "" ||
        formData.password == ""
      ) {
        setFormData(blankForm);
        alert("all fields are required");
        return;
      }

      await axios
        .post("http://localhost:3000/register", formData)
        .then((res) => alert("user added sucessfully"))
        .catch((err) => console.error(err));
      setFormData(blankForm);
      setFormType("login");
    }
  };

  return (
    <div className=" w-96 p-5 flex flex-col gap-2 mx-auto mt-10">
      <div className="title text-3xl font-semibold">Login to your account</div>
      <div className="options flex items-center flex-col gap-2">
        <img src={google} className="inline-block w-10 shadow-md rounded-xl" />
        <div className="second-option">Or use e-mail address</div>
      </div>
      <div className="actual-form">
        {formType === "signup" ? (
          <div className="form-control">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              name="username"
              className="input-field"
              placeholder="for ex:John"
              onChange={handleDataInput}
              value={formData.username}
              required
            />
          </div>
        ) : (
          ""
        )}

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            className="input-field"
            placeholder="📧"
            onChange={handleDataInput}
            value={formData.email}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="input-field"
            required
            placeholder="🔒"
            onChange={handleDataInput}
            value={formData.password}
          />
        </div>
        <div className="some-options flex justify-between">
          <span className="flex items-center gap-1">
            <input type="checkbox" checked />
            Remember me
          </span>
          <span className="inline-block p-5">
            <a href="/forgot">forgot password</a>
          </span>
        </div>
        <button
          className="bg-sky-700 w-[100%] text-white rounded-sm active:bg-sky-500"
          onClick={handleSubmit}
        >
          {formType === "signup" ? "Sign Up" : "Login now"}
        </button>
        <div className="mt-2">
          Don't have a account?{" "}
          <span
            className="text-red-600 font-bold cursor-pointer"
            onClick={() => setFormType("signup")}
          >
            sign up now
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
