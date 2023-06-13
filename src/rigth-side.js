import React from "react";
import { Header } from "./header";
import { Body } from "./body";
import './right-side.css';
function Right_side()
{
    return(
        <div className="right-side">
            <Header></Header>
            <Body></Body>
        </div>
    )
}

export { Right_side }