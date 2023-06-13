import React from "react";
import "./left-bar.css"

function Left_bar(){
    return(
        <div className="left-bar">
            <div className="profile-picture">
                <img src="" alt="" />
            </div>
            <div className="menu">
                <ul>
                    <a>Settings</a>
                </ul>
                <ul>
                    <a href="">Dashboard</a>
                </ul>
                <ul>
                    <a href="">Users</a>
                </ul>
                <ul>
                    <a href="">E-Books</a>
                </ul>
                <ul>
                    <a href="">Books</a>
                </ul>
                <ul>
                    <a href="">Other Details</a>
                </ul>
                <ul>
                    <a href="">Notifications</a>
                </ul>
            </div>
        </div>
    )
}

export { Left_bar }