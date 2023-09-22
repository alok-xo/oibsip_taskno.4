import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const Navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/Signup", { name, email, Password })
      .then(result => {console.log(result)
      Navigate('/login')} )
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2 className="text-center">Sign up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 fnt">
            <label htmlFor="email">
              <strong>Name</strong>
            </label>
            <input
              minLength={3}
              maxLength={10}
              placeholder="Enter Name"
              autoComplete="off"
              className="form-control bg-light"
              required
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
            <button type="submit" className="w-100 btn btn-primary mt-3">
              Sign up
            </button>
            <p>Already have an account?</p>
          </div>
        </form>
        <Link
          to="/login"
          type="submit"
          className="btn btn-default border w-100 text-decoration-none"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
