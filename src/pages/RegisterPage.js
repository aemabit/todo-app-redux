import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import ErrorMsg from "../components/error/ErrorMsg";
import { register } from "../redux/actions/authActions";

const inititalState = {
  username: "",
  email: "",
  password: "",
};

const RegisterPage = ({ error, register, isAuthenticated }) => {
  const history = useHistory();
  const [registerUser, setRegisterUser] = useState(inititalState);

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/todo");
    }
  }, [isAuthenticated]);

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
      {error.status && error.status !== 401 && <ErrorMsg error={error} />}

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
              required
            />
          </div>

          <div className="wrapper-input">
            <label htmlFor="email">Email</label>
            <input
              value={registerUser.email}
              onChange={handleChange}
              type="email"
              name="email"
              required
            />
          </div>

          <div className="wrapper-input">
            <label htmlFor="password">password</label>
            <input
              value={registerUser.password}
              onChange={handleChange}
              type="password"
              name="password"
              required
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
