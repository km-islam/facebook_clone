import React from "react";
import Avatar from "@mui/material/Avatar";
import "../styles/Story.css"

function Story({ image, profileSrc, title }) {
  return (
    <div className="story" style={{ backgroundImage: `url(${image})` }}>
      <Avatar src={profileSrc} className="story_avatar" />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
