import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Background from "../shared/bartender2.png";
import { setUser } from "../redux/actions";
 







return (
    <>
      <form className="text-center form-container">
        <h1>Create an Account To Start Looking Up Cocktails!</h1>
        <div>
          <label htmlFor="name">First and Last Name</label>
          <input
            type="text"
            placeholder="First Name and Last Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="eMail">Enter Email Address</label>
          <input
            type="text"
            placeholder="Email Address"
            value={eMail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
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
                signUp();
              }}
            >
              signUp
            </button>
            {/* div that only shows if error */}
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
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
