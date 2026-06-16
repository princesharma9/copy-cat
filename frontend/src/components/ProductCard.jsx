import "./ProductCard.css";

function ProductCard({
  productName,
  productImage,
  originalPrice,
  rating,
  discount,
  salePrice,
}) {
  const discountPercentage = Math.round(
    ((originalPrice - salePrice) / originalPrice) * 100,
  );
  return (
    <div className="product-card">
      <div className="product-card__image_box">
        <img
          src={productImage}
          alt={productName}
          className="product-card__image"
        />
        <div className="product-card__rating_box">
          ⭐{rating} 
        </div>
      </div>
      <h3 className="product-card__title">{productName}</h3>
      <div className="product-card__price_section">
        <span className="product-card__sale_price">₹{salePrice}</span>
        <span className="product-card__original_price">{originalPrice}</span>
      </div>
    </div>
  );
}

export default ProductCard;
