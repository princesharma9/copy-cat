import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ProductDetail.css";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASEURL = "http://localhost:8000";

  useEffect(() => {
    fetch(`${BASEURL}/products/${id}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setSelectedImage(data.productImage);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;
  if (!product) return <h2>Product Not Found</h2>;

  const images = [
    product.productImage,
    product.productImageTwo,
    product.productImageThree,
    product.productImageFour,
    product.productImageFive,
  ].filter(Boolean);

  return (
    <div className="product-page">

      <div className="breadcrumb">
        <Link to='/' className="Home-btn" >Home</Link>/ {product.category.name} / {product.brandName} /
        {product.uprdescription}
      </div>

      <div className="product-container">

        {/* LEFT */}

        <div className="gallery-section">

          <div className="main-image">
            <img src={selectedImage} alt={product.brandName} />
          </div>

          <div className="thumbnail-grid">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className={
                  selectedImage === img
                    ? "thumbnail active-thumbnail"
                    : "thumbnail"
                }
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

        </div>

        {/* RIGHT */}

        <div className="info-section">

          <p className="brand-link">
            Visit Brand Store
          </p>

          <h2 className="brand-name">
            {product.brandName}
          </h2>

          <h3 className="product-title">
            {product.description}
          </h3>

          <div className="rating-box">
            ⭐ {product.rating}
          </div>

          <div className="price-section">

            <span className="discount">
              {product.off}% OFF
            </span>

            <span className="old-price">
              ₹{product.originalPrice}
            </span>

            <h1 className="new-price">
              ₹{product.salePrice}
            </h1>

          </div>

          <div className="size-section">

            <h4>Select Size</h4>

            <button className="size-btn">
              {product.size}
            </button>

          </div>

          <div className="stock-section">
            {product.Stock
              ? "✅ In Stock"
              : "❌ Out Of Stock"}
          </div>

          <div className="button-group">

            <button className="cart-btn">
              Add To Cart
            </button>

            <button className="buy-btn">
              Buy Now
            </button>

          </div>

          <div className="product-meta">
            <p><strong>Product ID:</strong> {product.id}</p>

            <p>
              <strong>Added On:</strong>{" "}
              {new Date(product.created_at).toLocaleDateString()}
            </p>
          </div>

          <div className="description-box">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ProductDetails;