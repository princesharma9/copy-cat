import {useState, useEffect} from 'react';

function App() {
  const [productData, setProductData] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/Allproducts/')
      .then(response => response.json())
      .then(data => setProductData(data))
      .then(data => console.log('Data:', data))
      .catch(error => console.error('Error fetching product data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Product List</h1>
      <p>{productData || 'Loading...' }</p>
      {/* <ul>
        {productData.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;