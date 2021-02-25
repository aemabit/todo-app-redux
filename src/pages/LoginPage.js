import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import ErrorMsg from "../components/error/ErrorMsg";
import { login } from "../redux/actions/authActions";

const inititalState = {
  email: "",
  password: "",
};

const LoginPage = ({ login, error, isAuthenticated }) => {
  const history = useHistory();
  const [loginUser, setLoginUser] = useState(inititalState);

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/todo");
    }
  }, [isAuthenticated]);

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
      {error.status && error.status !== 401 && <ErrorMsg error={error} />}
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
              required
            />
          </div>

          <div className="wrapper-input">
            <label htmlFor="password">password</label>
            <input
              value={loginUser.password}
              onChange={handleChange}
              type="password"
              name="password"
              required
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
