import React from "react";
import InsideCraft from "./assets/InsideCraft.jpg";
import "./Business.css";
import Businesses from "./Business"; 


function itemList({Businesses}){
    return (
        <li>{Businesses}</li>
    )
}
function BusinessArray() {
const Items=[{Businesses}];

return (
    <ul>
    {Items.map((Item, index)=> ( 
       <ItemList key={index} Businesses={Item} /> 
    ))}
    </ul>
);
};




