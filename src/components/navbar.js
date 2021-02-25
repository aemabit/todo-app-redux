import React from "react";
import { connect } from "react-redux";
import Logout from "./auth/Logout";

const NavBar = ({ isAuthenticated }) => {
  return (
    <div className="wrapper-navbar">
      <h1>TODO app</h1>
      {isAuthenticated && <Logout />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps)(NavBar);
