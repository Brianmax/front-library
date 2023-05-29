import React from "react";
import "./login.css";
import { useState } from "react";
function Login(){
    const [myState, setState] = React.
    useState("");
    return (
      <div className="login">
        <div className="loginContainer">
          <form action="post" className="formLogin">
            <label htmlFor="email">Email</label>
            <input type="text"
            value={myState}
            onChange={(event)=>{
              setState(event.target.value)
            }}/><br />
            <label htmlFor="password">Password</label>
            <input type="password" /><br />
            <button>Login</button>
          </form>
          <div className="links">
            <a href="">Forgot my Password</a>
            <a href="">Go Home</a>
          </div>
        </div>
      </div>
    )
  }

export {Login}