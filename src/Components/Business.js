import React from "react";
import InsideCraft from "./assets/InsideCraft.jpg";
import "./Business.css";

const image= [InsideCraft,]
const name= ['Craft Beers', ]
const address= ['This is the Address',]
const phone= ['(000) 000-0000',]
const category= ['Bar and Grill', ]
const rating= ['5/5',]
const reviewCount= ['1000', ]
 
// Create an array of a single business
const businessItems = image.map((image, index) => ({
 image,
 name: name[index],
 address: address[index],
 phone: phone[index],
 category: category[index],
 rating: rating[index],
 reviewCount: reviewCount[index],

}));

// Create a component to display a single business
function BusinessCard({image, name, address, phone, category, rating, reviewCount}) {
  return (
    <div className="Business-Card">
      <img src={image} alt="Business" />
      <h1>{name}</h1>
      <p>{address}</p>
      <p>{phone}</p>
      <p>{category}</p>
      <p>{rating}</p>
      <p>{reviewCount}</p>
    </div>
  );
}

// Create a component to display a list of businesses
function BusinessList() {
  return (
    <div>
      {businessItems.map((item, index) => (
        <BusinessCard
          key={index}
          image={item.image}
          name={item.name}
          address={item.address}
          phone={item.phone}
          category={item.category}
          rating={item.rating}
          reviewCount={item.reviewCount}
        />
      ))}
    </div>
  );
}

export default BusinessList;



