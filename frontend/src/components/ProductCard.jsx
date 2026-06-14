import React from "react";
function ProductCard({
  name,
  details,
  price,
  image,
  ratings,
  discount,
  reviews,
  sale_price,
}){
  return (
    <>
      <span className="product-card">
        <img src={image} alt={name}></img>
        <p>
          ⭐ {ratings} ({reviews})
        </p>
        <h3>{name}</h3>
        {/* <h2>{details}</h2> */}
        <div>₹{price}</div>
        <div>₹{sale_price}</div>
        {/* <h3>{discount}% OFF</h3> */}
      </span>
    </>
  );
};

export default ProductCard;
