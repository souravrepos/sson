import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import authReducer from "../../reducers/authReducer";
import PropTypes from "prop-types";

const Landing = ({ auth: isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div class="landing-inner">
          <h1 className="x-large">SSON Share</h1>
          <p className="lead">Welcome</p>
          <div className="buttons">
            <Link to="/signup" className="btn-wide btn-primary">
              Sign Up
            </Link>
          </div>
          <div className="buttons">
            <br />
            <Link to="/login" className="btn-wide btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  auth: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
