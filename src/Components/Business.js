import React from "react";
import InsideCraft from "./assets/InsideCraft.jpg";
import "./Business.css";

const image= [InsideCraft,]
const name= ['Craft Beers', 'Inside Craft']
const address= ['This is the Address', 'address 2']
const phone= ['(000) 000-0000','(000) 000-0000']
const category= ['Bar and Grill', 'Bar and Grill']
const rating= ['5/5', '5/5']
const reviewCount= ['1000', '1000']


function BusinessImage() {
    return <img src= {image} className="Business-image" />
}
function BusinessNames() {
    return <h1 className="Business-name">{name}</h1>
}

function BusinessAddress() {
    return <p className="Business-address">{address}</p>
}

function BusinessPhone() {
    return <p className="Business-phone">{phone}</p>
}

function BusinessCategory() {
    return <p className="Business-category">Category: {category}</p>
}

function BusinessRating() {
    return <p className="Business-rating">Rating on Yelp: {rating}</p>
}    

function BusinessReviewCount() {
    return <p className="Business-reviewCount"> Reviews: ({reviewCount})</p>
}   

function Businesses() {
    return (
        <div className='Business-Card'>
            <li>
            <BusinessImage alt='inside of the resturant'/>
            <BusinessNames />
            <BusinessAddress />
            <BusinessPhone />
            <BusinessCategory />
            <BusinessRating />
            <BusinessReviewCount />  
            </li>
        </div>
    )
};

export default Businesses; 