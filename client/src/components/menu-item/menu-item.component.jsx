import React from "react";
import { withRouter } from "react-router";
import "./menu-item.style.scss";

function MenuItem({ title, imageUrl, size, history, linkUrl, match }) {
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">shop Now</span>
      </div>
    </div>
  );
}
export default withRouter(MenuItem);
