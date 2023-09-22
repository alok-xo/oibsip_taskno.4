import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, Password })
      .then((result) => {
        console.log(result)
        if(result.data === 'success') {
            navigate('/home')
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2 className="text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              placeholder="Enter Email"
              autoComplete="off"
              className="form-control bg-light"
              required
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              placeholder="Enter Password (4 to 10 Uppercase)"
              className="form-control bg-light"
              required
              pattern="[A-Z]{4,10}"
              name="Password"
              type="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-100 btn btn-primary mt-3">
            Login
          </button>
        </form>
        <Link to='/signup' className="mt-3 btn btn-default border w-100 bg-light text-dark">
            Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
