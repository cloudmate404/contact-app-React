import React from "react";
import user from "../images/image.png";

export default function ({ contact }) {
  const { name, email } = contact;
  return (
    <div className="item" style={{ display: "flex", padding: "10px" }}>
      <img src={user} alt="avatar" className="ui avatar image" />
      <div className="content">
        <div className="header" style={{ color: "blue", display: "inline" }}>
          {name}
        </div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "auto" }}
      ></i>
    </div>
  );
}
