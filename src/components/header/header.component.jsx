import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/99.svg";
import { auth } from "../../firebase/firebase.util";
import { connect } from "react-redux";

import "./header.style.scss";
import CartIcon from "../cart-icon/cart-icon.component";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>

        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              auth.signOut();
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        )}
        {currentUser ? <Link to="/">{currentUser.displayName}</Link> : <></>}

        <CartIcon />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
