import { useState, useEffect } from "react";
import './App.css'
// components
import ProductCard from "./components/ProductCard/ProductCard";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'

function App() {
  const [productData, setProductData] = useState([]);
 
  const BASE_URL = 'http://localhost:8000'
 
  useEffect(() => {
    fetch(`${BASE_URL}/products/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProductData(data);
      })
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  const Home = () => (
    <div className="app_parent">
      <Navbar />
      <div className="products">
        {productData.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            brandName={product.brandName}
            originalPrice={product.originalPrice}
            rating={product.rating}
            salePrice={product.salePrice}
            productImage={`${BASE_URL}${product.productImage}`}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
