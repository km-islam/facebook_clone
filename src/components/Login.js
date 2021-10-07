import React from "react";
import "../styles/Login.css";
import { auth, provider, signInWithPopup } from "../Firebase.js";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
          alt="logo"
        />
        <img
          src="https://freepngimg.com/thumb/facebook/24926-5-facebook-logo-clipart.png"
          alt="logo 2"
        />
      </div>
      <button type="submit" onClick={signIn}>
        Sign in
      </button>
    </div>
  );
}

export default Login;
