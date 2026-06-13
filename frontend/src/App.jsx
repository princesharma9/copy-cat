import {useState, useEffect} from 'react';

function App() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/Allproducts/')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setProductData(data)
      })
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
      <img src={`http://localhost:8000/media/${product.image}`} alt='product'></img>
      <h3>{product.discount}</h3>
      <h2>{productData.image}</h2>
      <h3>{product.name}</h3>
      <p>{product.details}</p>
      <p>₹{product.price}</p>
    </div>
  ))
}
    </div>
  );
}

export default App;