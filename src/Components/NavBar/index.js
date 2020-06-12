import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { displayComponent } from "../../actions";
import { logOut } from "../../actions";
import "./index.css";

class NavBar extends Component {
  renderRegister = () => {
    const { isAuth, logOut } = this.props;
    if (isAuth) {
      return (
        <div className="navLR">
          <i className="fas fa-search  navIcon" />
          <i className="fas fa-envelope  navIcon" />
          <i className="fas fa-bell  navIcon" />
          <Link to="/" className="navRegister" onClick={() => logOut()}>
            logOut
          </Link>
        </div>
      );
    }
    return (
      <div className="navLR">
        <Link to="/login">
          <button className="navLogin">Login</button>
        </Link>
        <Link to="/Register">
          <button className="navRegister">Register</button>
        </Link>
      </div>
    );
  };

  renderRegisterProf = () => {
    const { isAuth } = this.props;
    if (isAuth) {
      return (
        <Link to="/profile" className="linkColor">
          Profile
        </Link>
      );
    }
  };
  render() {
    return (
      <div className="nav">
        <Link to="/">
          <img className="navLogo" src="img/logo.png" alt="logo" />
        </Link>

        <ul className="navUL">
          <li
            className="navLi"
            // onClick={() => this.props.displayComponent("Home")}
          >
            <Link to="/" className="linkColor">
              Home
            </Link>
          </li>
          <li
            className="navLi"
            // onClick={() => this.props.displayComponent("Vehicles")}
          >
            <Link to="/vehicles" className="linkColor">
              Vehicles
            </Link>
          </li>

          <li className="navLi">
            <Link to="/offer" className="linkColor">
              Offers
            </Link>
          </li>

          <li
            className="navLi"
            // onClick={() => this.props.displayComponent("Contact Us")}
          >
            <Link to="/contact" className="linkColor">
              Contact Us
            </Link>
          </li>

          <li className="navLi">{this.renderRegisterProf()}</li>
        </ul>
        {this.renderRegister()}
      </div>
    );
  }
}

const mapStateToProps = ({ owner }) => {
  return {
    isAuth: owner.isAuth,
  };
};

export default connect(mapStateToProps, { displayComponent, logOut })(NavBar);
