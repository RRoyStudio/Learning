import React from "react";
import InsideCraft from "./assets/InsideCraft.jpg";
import "./Business.css";


function BusinessImage(props) {
    return <img src={props.image} className="Business-image" />
}
function BusinessNames(props) {
    return <h1 className="Business-name">{props.name}</h1>
}

function BusinessAddress(props) {
    return <p className="Business-address">{props.address}</p>
}

function BusinessPhone(props) {
    return <p className="Business-phone">{props.phone}</p>
}

function BusinessCategory(props) {
    return <p className="Business-category">Category: {props.category}</p>
}

function BusinessRating(props) {
    return <p className="Business-rating">Rating on Yelp: {props.rating}</p>
}    

function BusinessReviewCount(props) {
    return <p className="Business-reviewCount"> Reviews: ({props.reviewCount})</p>
}   

function Businesses() {
    return (
        <div className='Business-Card'>
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