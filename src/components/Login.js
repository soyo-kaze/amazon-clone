import React from "react";
import "../styles/Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth, googleProvider } from "../firebaseConfig";

import logo from "../assets/amazon2.png";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const history = useHistory();

  const signInGoogle = (e) => {
    //   const history = useHistory();
    e.preventDefault();
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        // console.log(result);
        if (result) {
          history.push("/");
        }
      })
      .catch((e) => alert(e.message));
  };

  const handleSignIn = (e) => {
    e.preventDefault(); // so the page doesn't reloads when data is submitted since that breaks everything..!!
    auth
      .signInWithEmailAndPassword(email, pass)
      .then((auth) => {
        // console.log(auth);
        history.push("/");
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <>
      <div className="Login__page">
        <Link to="/">
          <img className="Login__logo" src={logo} alt="Amazon__img" />
        </Link>
        <div className="Login__section">
          <h1>Sign-In</h1>
          <form>
            <h5>Email</h5>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <button type="submit" onClick={handleSignIn}>
              Sign In
            </button>
            <p
              style={{
                textAlign: "center",
                fontSize: 12,
                color: "#555",
              }}
            >
              or
            </p>
            <button type="submit" onClick={signInGoogle}>
              Sign In With Google
            </button>
          </form>
          <p>
            By continuing, you agree to Amazon's{" "}
            <a
              href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940"
              target="__blank"
            >
              Conditions of Use
            </a>{" "}
            and{" "}
            <a
              href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380"
              target="__blank"
            >
              Privacy Notice.
            </a>{" "}
          </p>
        </div>
        <div className="Regiter__sec">
          <p>New to Amazon?</p>
          <button
            className="Register__But"
            onClick={() => history.push("/sign-up")}
          >
            Create your Amazon account
          </button>
        </div>
        <div className="divider">
          <p>© 1996-2021, Amazon.com, Inc. or its affiliates </p>
        </div>
      </div>
    </>
  );
};

export default Login;
