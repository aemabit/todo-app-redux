import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../redux/actions/authActions";

const inititalState = {
  email: "",
  password: "",
};

const LoginPage = ({ login }) => {
  const [loginUser, setLoginUser] = useState(inititalState);

  const handleChange = (e) => {
    setLoginUser({
      ...loginUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(loginUser);
  };

  return (
    <div className="wrapper-body">
      <h1>Login</h1>
      <div className="wrapper-form">
        <form onSubmit={handleSubmit}>
          <div className="wrapper-input">
            <label htmlFor="email">Email</label>
            <input
              value={loginUser.email}
              onChange={handleChange}
              type="email"
              name="email"
            />
          </div>

          <div className="wrapper-input">
            <label htmlFor="password">password</label>
            <input
              value={loginUser.password}
              onChange={handleChange}
              type="password"
              name="password"
            />
          </div>

          <input className="submit-btn" type="submit" value="Sign In" />
        </form>
        <p>
          Don't have an account? <Link to="/">Sign Up</Link>
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

export default connect(mapStateToProps, { login })(LoginPage);
