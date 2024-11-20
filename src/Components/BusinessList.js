import React from "react";
import InsideCraft from "./assets/InsideCraft.jpg";
import "./Business.css";
import Businesses from "./Business"; 

function BusinessList() {
    React.cloneElement(<Businesses/>, {Businesses, key: index})

    return (
        <div className="Business-List">
         {BusinessList}
        </div>
    );
}