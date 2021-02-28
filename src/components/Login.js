import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function login() {
    if (username.length > 7 && password.length > 7) {
      history.push("/Search");
    }
  };
  
  return (
    <>
      <h1>Login</h1>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="Password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={() => login()}>
          Log In
        </button>
      </div>
    </>
  );
};
export default Login;
