import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/authAction";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const loggedIn = (
    <ul>
      <li>
        <a onClick={logout}>Sign Out</a>
      </li>
    </ul>
  );

  const loggedOut = (
    <ul>
      <li>
        <Link to="">Developers</Link>
      </li>
      <li>
        <Link to="/signup">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-cube text-primary"></i> SSON
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? loggedIn : loggedOut}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps, { logout })(Navbar);
