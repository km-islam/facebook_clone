import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import "../styles/MessageSender.css";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import MoodIcon from "@mui/icons-material/Mood";
import { useStateValue } from "./StateProvider";
import { db, collection, addDoc } from "../Firebase";
import "firebase/firestore";

function MessageSender() {
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    async function postDataFetch() {
      try {
        const postData = await addDoc(collection(db, "posts"), {
          message: input,
          profilePic: user.photoURL,
          username: user.displayName,
          image: imageUrl,
          timestamp: user.timestamp,
        });
        console.log("Document written with ID: ", postData.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    postDataFetch();
    setInput("");
    setImageUrl("");
  };
  return (
    <div className="messageSender">
      <div className="messageTop">
        <Avatar src={user.photoURL} />
        <form>
          <input
            type="text"
            placeholder={`What's on your mind ,${user.displayName}?`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            type="text"
            placeholder=" image URL()Option "
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            hidden submit
          </button>
        </form>
      </div>
      <div className="messageBottom">
        <div className="messageSender_option">
          <VideoCameraFrontIcon style={{ color: "red", marginRight: "15px" }} />
          <h4>Live video</h4>
        </div>
        <div className="messageSender_option">
          <PhotoLibraryIcon style={{ color: "green", marginRight: "15px" }} />
          <h4>Photo/Video</h4>
        </div>
        <div className="messageSender_option">
          <MoodIcon style={{ color: "orange", marginRight: "15px" }} />
          <h4>Feeling/Activity</h4>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
