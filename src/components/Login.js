import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import Background from "../shared/bartender2.png";
import { setUser } from "../redux/actions";

const Login = (props) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function login() {
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
      const response = await fetch("/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
      });
      const json = await response.json();
      console.log(json)
      if (json.success === false) {
        setError("Invalid Username or Password");
      } else {
        props.setUser(json.data.username);
        history.push("/search");
      }
    } catch (err) {
      setError("Something went wrong, please try again later.");
      console.log(err);
    }
    
  }

  return (
    <>
      <form className="text-center form-container">
        <h1>Thirsty? Login For a Drink!</h1>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
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
                login();
              }}
            >
              Log In
            </button>
            <div>
            <NavLink to="/signup">Not a user? Signup here</NavLink>
            </div>
            {error.length > 0 && (
              <h3 style={{ color: "red" }} className="text-center">
                {error}
              </h3>
            )}
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
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
