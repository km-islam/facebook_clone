import React from 'react'
import Avatar from "@mui/material/Avatar";
import "../styles/Contacts.css";

function Contact({ src, title }) {
  return (
    <div className="contact">
      {src && <Avatar src={src} />}
      <h4>{title}</h4>
    </div>
  );
}

export default Contact
