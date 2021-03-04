import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Background from "../shared/bartender2.png";
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
      <div className="bk-img" style={{ backgroundImage: `url(${Background})`,
      // backgroundRepeat: "no-repeat",
      // width: "400px",
      
      }}>
      </div>
    </>
  );
};
export default Login;
