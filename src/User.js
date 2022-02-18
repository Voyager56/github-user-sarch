import React from "react";
import "./User.css";

const User = (props) => {
  const { html_url, avatar_url, login } = props.user;
  console.log(props.user);

  return (
    <a className="user" target="_blank" href={html_url}>
      <img className="avatar" src={avatar_url} alt="avatar" />
      <span className="username">{login}</span>
    </a>
  );
};

export default User;
