import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/99.svg";
import { auth } from "../../firebase/firebase.util";
import "./header.style.scss";

export default function Header({ currentUser }) {
  let avatarColors = ["#aafc5d", "#ff9ee7", "#8126ff", "#f5db47"];
  var shuffledColor =
    avatarColors[Math.floor(Math.random() * avatarColors.length)];
  if (currentUser.displayName) {
    var name = currentUser.displayName;
    var firstLetter = name.substr(0, 1);
    var split = name.split(" ");
    var secondLetter = split[1].substr(0, 1);
    var initials = firstLetter.concat(secondLetter);
    var initialsCaps = initials.toLocaleUpperCase();
  }

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

        {currentUser.id ? (
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
        {currentUser.id ? (
          <div
            className="profileContainer"
            style={{ backgroundColor: shuffledColor }}
          >
            <Link to="/" className="profileAvatar">
              {initialsCaps}
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
