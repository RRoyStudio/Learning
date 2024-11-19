import React from "react";
import InsideCraft from "../assets/InsideCraft.jpg";


function BusinessImage(props) {
    return <img src={props.image} />
}
function BusinessNames(props) {
    return <h1>{props.name}</h1>
}

function BusinessAddress(props) {
    return <p>{props.address}</p>
}

function BusinessPhone(props) {
    return <p>{props.phone}</p>
}

function BusinessCategory(props) {
    return <p>{props.category}</p>
}

function BusinessRating(props) {
    return <p>{props.rating}</p>
}    

function BusinessReviewCount(props) {
    return <p>{props.reviewCount}</p>
}   

function Businesses() {
    return (
        <div>
            <BusinessImage image= {InsideCraft} alt="image of inside Craft Beers"/>
            <BusinessNames name="Craft Beers"/>
            <BusinessAddress address="This is the Address"/>
            <BusinessPhone phone="(000) 000-0000"/>
            <BusinessCategory category="Bar and Grill"/>
            <BusinessRating rating="5/5"/>
            <BusinessReviewCount reviewCount="1000"/>  
        </div>
    )
};

export default Businesses; 