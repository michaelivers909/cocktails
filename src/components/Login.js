import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Background from "../shared/bartender2.png";
import { setUser } from "../redux/actions";
const Login = (props) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function login() {
    if (username.length > 7 && password.length > 7) {
      props.setUser(username);
      history.push("/Search");
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
            <button type="submit" onClick={() => login()}>
              Log In
            </button>
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);
