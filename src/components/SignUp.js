import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import Background from "../shared/bartender2.png";
import { setUser } from "../redux/actions";
import axios from "axios";

const SignUp = (props) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function signup() {
    setError("");
    if (
      username.length < 7 ||
      username.length > 16 ||
      password.length > 20 ||
      password.length < 7
    ) {
      setError(
        "Username must be between 7 and 16 characters and Password must be between 7 and 20 characters"
      );

      return;
    }
    try {
      const json = await axios.post("/users/signup", {
        username: username,
        password: password,
      });
      console.log(json);
      if (json.data.error) {
        setError(json.data.error);
      } else {
        props.setUser(json.data.data.username);
        history.push("/search");
      }
    } catch (err) {
      setError("Something went wrong, please try again later.");
    }
  }

  return (
    <>
      <form className="text-center form-container">
        <h1>Create an Account To Start Looking Up Cocktails!</h1>
        <div>
          <label htmlFor="username">Create Username</label>
          <input
            type="text"
            placeholder="Create Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Create Password</label>
          <input
            type="Password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                signup();
              }}
            >
              Sign Up
            </button>
            {error.length > 0 && (
              <h3 style={{ color: "red" }} className="text-center">
                {error}
              </h3>
            )}
            <div>
            <NavLink to="/login">Already a member? Log in here!</NavLink>
            </div>
          </div>
        </div>
      </form>
      <div
        className="bk-img"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>
    </>
  );
};

const mapDispatchToProps = {
  setUser,
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
