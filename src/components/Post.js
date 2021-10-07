import React from "react";
import Avatar from "@mui/material/Avatar";
import "../styles/Post.css";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoodIcon from "@mui/icons-material/Mood";

function Post(props) {
  const { profilePic, image, username, timestamp, message } = props;
  return (
    <div className="post">
      <div className="post_top">
        <Avatar src={profilePic} className="post_avatar" />
        <div className="post_topInfo">
          <h4>{username}</h4>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div>
        <div className="post_caption">
          <p>{message}</p>
        </div>
        <div className="post_image">
          <img src={image} alt="post " />
        </div>
        <div className="post_comment">
          <div className="commentTop">
            <div className="commentEmoji">
              <MoodIcon
                fontSize="large"
                style={{ color: "orange", marginRight: "15px" }}
              />
              <p></p>
            </div>
            <div className="numberOfComment">
              <p>Comments</p>
            </div>
          </div>
          <div className="commentBottom">
            <div className="comment_option">
              <ThumbUpOutlinedIcon
                color="action"
                style={{ marginRight: "15px" }}
              />
              <h4>Like</h4>
            </div>
            <div className="comment_option">
              <ChatBubbleOutlineOutlinedIcon
                color="action"
                style={{ marginRight: "15px" }}
              />
              <h4>Comment</h4>
            </div>
            <div className="comment_option">
              <ShareOutlinedIcon
                color="action"
                style={{ marginRight: "15px" }}
              />
              <h4>Share</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
