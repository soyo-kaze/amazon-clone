import React from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "../styles/userProfile.css";
import bg from "../assets/gaming.jpg";
import dp from "../assets/pic.png";

const UserProfile = () => {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();

  if (user === null) {
    setTimeout(() => history.push("/login"), 2000);
  } // if user is not logged in simple redirection with a delay of 2sec

  return user === null ? ( // ternary for checking user auth is not logged-in then show redirecting text!!
    <>
      <div style={{ height: 60 }}></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <h1>Not SignedIn REDIRECTING TO LOGIN PAGE...</h1>
      </div>
    </>
  ) : (
    <>
      <div class="user__profile">
        <div style={{ height: 60 }}></div>
        <div class="profile__wall" style={{ backgroundImage: `url(${bg})` }}>
          {/* for profile wallpaper */}
        </div>
        <div class="profile__info">
          <div class="profile__pic">
            <img src={dp} alt="profile-pic" />
          </div>
          <h1
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "center",
              margin: 0,
            }}
          >
            {user.displayName}
          </h1>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
