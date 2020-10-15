import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/99.svg";
import { auth } from "../../firebase/firebase.util";

import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

import {createStructuredSelector} from 'reselect'
import {selectHidden} from '../../redux/cart/cart.selector'
import {selectCurrentUser} from '../../redux/user/user.selector'

import "./header.style.scss";

const Header = ({ currentUser, hidden }) => {
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
        {currentUser ? (
          <Link to="/" className="option">
            {currentUser.displayName.toUpperCase()}
          </Link>
        ) : (
          <></>
        )}

        <CartIcon className="option" />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectHidden
});

export default connect(mapStateToProps)(Header);
