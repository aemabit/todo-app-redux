import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../redux/actions/authActions";

const inititalState = {
  username: "",
  email: "",
  password: "",
};

const RegisterPage = ({ isAuthenticated, error, register }) => {
  const [registerUser, setRegisterUser] = useState(inititalState);

  const handleChange = (e) => {
    setRegisterUser({
      ...registerUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(registerUser);
  };

  return (
    <div className="wrapper-body">
      <h1>Register</h1>
      <div className="wrapper-form">
        <form onSubmit={handleSubmit}>
          <div className="wrapper-input">
            <label htmlFor="username">Username</label>
            <input
              value={registerUser.username}
              onChange={handleChange}
              type="text"
              name="username"
            />
          </div>

          <div className="wrapper-input">
            <label htmlFor="email">Email</label>
            <input
              value={registerUser.email}
              onChange={handleChange}
              type="email"
              name="email"
            />
          </div>

          <div className="wrapper-input">
            <label htmlFor="password">password</label>
            <input
              value={registerUser.password}
              onChange={handleChange}
              type="password"
              name="password"
            />
          </div>

          <input className="submit-btn" type="submit" value="Create account" />
        </form>
        <p>
          Already Registered <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
  };
};

export default connect(mapStateToProps, { register })(RegisterPage);
