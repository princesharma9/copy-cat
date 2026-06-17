import "./ProductCard.css";

function ProductCard({
  brandName,
  productImage,
  originalPrice,
  rating,
  discount,
  salePrice,
  description,
}) {
  const discountPercentage = Math.round(
    ((originalPrice - salePrice) / originalPrice) * 100,
  );
  return (
    <div className="product-card">
      <div className="product-card__image_box">
        <img
          src={productImage}
          alt={brandName}
          className="product-card__image"
        />
        <div className="product-card__rating_box">
          ⭐{rating} 
        </div>
      </div>
        <div className="product-card__title_description">
      <h3 className="product-card__title">{brandName}</h3>
      <h3 className="product-card_description">{description}</h3>
         </div>
      <div className="product-card__price_section">
        <span className="product-card__sale_price">₹{salePrice}</span>
        <span className="product-card__original_price">{originalPrice}</span>
      </div>
    </div>
  );
}

export default ProductCard;
