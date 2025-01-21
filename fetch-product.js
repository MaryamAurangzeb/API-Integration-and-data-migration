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
