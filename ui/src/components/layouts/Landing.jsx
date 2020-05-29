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
          <p className="lead">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className="buttons">
            <Link to="/signup" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
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
