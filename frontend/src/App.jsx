import { useState, useEffect } from "react";
import './App.css'
// components
import ProductCard from "./components/ProductCard/ProductCard";
import Navbar from "./components/Navbar/Navbar";

// data


function App() {
  const [productData, setProductData] = useState([]);
 
  const BASE_URL = 'http://localhost:8000'
 
  useEffect(() => {
    fetch("http://localhost:8000/products/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProductData(data);
      })
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  return (
    <div className="app_parent">
        <Navbar></Navbar>

      <div className="products">
        {productData.map((product) => (
          <ProductCard
            key={product.id}
            brandName={product.brandName}
            originalPrice={product.originalPrice}
            rating={product.rating}
            salePrice={product.salePrice}
            productImage={`${BASE_URL}${product.productImage}`}
            description={product.description}
          
          ></ProductCard>
        ))}
        </div>
    </div>
  );
}

export default App;
