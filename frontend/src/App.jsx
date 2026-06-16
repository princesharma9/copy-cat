import { useState, useEffect } from "react";
import './App.css'
// components
import ProductCard from "./components/ProductCard";

// data
import products from "./data/products";

function App() {
  // const [productData, setProductData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8000/products/")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setProductData(data);
  //     })
  //     .catch((error) => console.error("Error fetching product data:", error));
  // }, []);

  return (
    <div className="app_parent">
      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            productName={product.productName}
            originalPrice={product.originalPrice}
            rating={product.rating}
            salePrice={product.salePrice}
            productImage={product.productImage}
          ></ProductCard>
        ))}
        </div>
    </div>
  );
}

export default App;
