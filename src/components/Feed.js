import React, { useState, useEffect } from "react";
import StoryReel from "./StoryReel";
import "../styles/Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import { db, getDocs, collection } from "../Firebase";
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "posts"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc}`);
        setPosts(
          querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
    }
    fetchData();
  }, []);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          kye={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          username={post.data.username}
          image={post.data.image}
          timestamp={post.data.timestamp}
        />
      ))}
    </div>
  );
}

export default Feed;
