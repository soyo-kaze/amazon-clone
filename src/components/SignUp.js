import React from "react";
import "../styles/Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebaseConfig";

import logo from "../assets/amazon2.png";

const SignUp = () => {
  const [info, setInfo] = React.useState({ email: "", pass: "", name: "" });

  const history = useHistory();

  const handleSignUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(info.email, info.pass)
      .then((userAuth) => {
        console.log(userAuth);
        if (userAuth) {
          userAuth.user
            .updateProfile({
              displayName: info.name,
            })
            .catch((e) => {
              alert(e.message);
            });
          history.push("/");
        }
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == "auth/weak-password") {
          alert("The password is too weak.");
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  };

  return (
    <>
      <div className="Login__page">
        <Link to="/">
          <img className="Login__logo" src={logo} alt="Amazon__img" />
        </Link>
        <div className="Login__section">
          <h1>Create your account</h1>
          <form>
            <h5>Name</h5>
            <input
              type="text"
              value={info.name}
              onChange={(e) => setInfo({ ...info, name: e.target.value })}
            />
            <h5>Email</h5>
            <input
              type="email"
              value={info.email}
              onChange={(e) => setInfo({ ...info, email: e.target.value })}
            />
            <h5>Password</h5>
            <input
              type="password"
              value={info.pass}
              onChange={(e) => setInfo({ ...info, pass: e.target.value })}
            />
            <button type="submit" onClick={handleSignUp}>
              Create your Amazon account
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
          <p>Already have Amazon account?</p>
          <button
            className="Register__But"
            onClick={() => history.push("/login")}
          >
            Sign In
          </button>
        </div>
        <div className="divider">
          <p>© 1996-2021, Amazon.com, Inc. or its affiliates </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
