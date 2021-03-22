import React from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";

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
      <div>
        <div style={{ height: 60 }}></div>
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
          }}
        >
          Welcome {user.displayName}
        </h1>
      </div>
    </>
  );
};

export default UserProfile;
