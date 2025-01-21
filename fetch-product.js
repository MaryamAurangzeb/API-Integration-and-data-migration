// pages/api/fetchProducts.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  const response = await fetch('https://hackathon-apis.vercel.app/api/products');
  const data = await response.json();
  
  if (response.ok) {
    res.status(200).json(data);
  } else {
    res.status(500).json({ message: 'Failed to fetch data' });
  }
}

Now, you can fetch this data on the frontend in your Next.js app.

js

// pages/products.js
import { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/fetchProducts');
      const data = await res.json();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
