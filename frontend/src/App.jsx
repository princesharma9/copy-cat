import { useState, useEffect } from "react";

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
    <>
      <span className="card">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            ratings={product.ratings}
            reviews={product.reviews}
            sale_price={product.sale_price}
            image={product.image}
          ></ProductCard>
        ))}
      </span>
    </>
  );
}

export default App;
