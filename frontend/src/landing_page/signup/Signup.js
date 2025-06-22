import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

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
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        { ...inputValue },
        { withCredentials: true }
      );
      const { success, message, user } = data;
      const {_id} = user

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          // navigate(`http://localhost:3001/?id=${_id}`);
          window.location.href = `http://localhost:3000/?id=${_id}`;
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.error(error);
    }

    // Reset form
    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col-4 mt-5">
          <img src="media/images/signup.png" alt="Signup Illustration" className="img-fluid" />
        </div>

        <div className="col-2 m-5"></div>

        <div className="col-5 p-5">
          <h1>Signup now</h1>
          <p className="text-muted fs-5">Or track your existing application</p>

          <form onSubmit={handleSubmit} className="p-2">
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Full Name"
                value={username}
                onChange={handleOnChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleOnChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
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

            <button type="submit" className="btn btn-primary w-100 mb-3">
              Sign Up
            </button>

            <p className="text-center">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Signup;
