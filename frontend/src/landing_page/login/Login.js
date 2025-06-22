import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };
  return (
    <div className="container mt-5 p-5 ">
      <div className="row ">
        <div className="col-4">
          <img src="media/images/signup.png" />
        </div>
        <div className="col-2 m-5"></div>
        <div className="col-5 p-5 ">
          <h1>Login</h1>
          <form className="p-3">
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                value={email}
                required
                onChange={handleOnChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleOnChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
             
            </button>
             <span>
                Already have an account? <Link to={"/signup"}>Signup</Link>
              </span>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Login;
