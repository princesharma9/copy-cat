import {useState, useEffect} from 'react';

function App() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/Allproducts/')
      .then(response => response.json())
      .then(data => setProductData(data))
      // .then(data => console.log('Data:', data))
      .catch(error => console.error('Error fetching product data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Product List</h1>
hello

     {
     
  productData.map((product) => (
    <div key={product.id}>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>₹{product.price}</p>
    </div>
  ))
}
    </div>
  );
}

export default App;