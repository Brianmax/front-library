import React from "react";
import "./header.css";

function Header(){
    return(
        <div className="header">
            <div className="container">
                <ul className="header-item">
                    <a href="">Change Password</a>
                </ul>
                <ul className="header-item">
                    <a href="">Change Username</a>
                </ul>
                <ul className="header-item">
                    <a href="">Logout</a>
                </ul>
            </div>
        </div>
    )
}

export {Header}