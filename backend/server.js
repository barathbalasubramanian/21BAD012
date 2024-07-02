const express = require('express');
const app = express();
const port = 3002;
const cors = require('cors');
const axios = require('axios');

app.use(express.json());
app.use(cors());

const API_URL = 'http://20.244.56.144/test/companies/FLP/categories/TV/products?top=10&minPrice=1&maxPrice=10000';
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE5OTEwMTQxLCJpYXQiOjE3MTk5MDk4NDEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijc4NmVmZmU1LTQxYzgtNDQ5MS05NGM4LTFiMjg4ZDY2MmVhNSIsInN1YiI6ImJhcmF0aGt1bWFyLjIxYWRAa2N0LmFjLmluIn0sImNvbXBhbnlOYW1lIjoiS3VtYXJhZ3VydSBDb2xsZWdlIG9mIFRlY2hub2xvZ3kiLCJjbGllbnRJRCI6Ijc4NmVmZmU1LTQxYzgtNDQ5MS05NGM4LTFiMjg4ZDY2MmVhNSIsImNsaWVudFNlY3JldCI6IkJqWG9uRGNyc3dicm13c1YiLCJvd25lck5hbWUiOiJCYXJhdGhrdW1hciBCIiwib3duZXJFbWFpbCI6ImJhcmF0aGt1bWFyLjIxYWRAa2N0LmFjLmluIiwicm9sbE5vIjoiMjFCQUQwMTIifQ.RtJTdu32shMnvdf94V0rwZYxUGLHw9M-A6sskcYntCY';

app.get('/', async (req, res) => {
  try {
    console.log('Making request to API with token:', AUTH_TOKEN);
    const response = await axios.get(API_URL,{
      headers: {
        'Authorization': `Bearer ${AUTH_TOKEN}`
      }
    });
    console.log('Success:', response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Error making API request:', error.response ? error.response.data : error.message);
    res.status(500).send('An error occurred while fetching data');  
  }
});

app.post('/', async (req, res) => {
  const cpy = req.body.companyName
  console.log(cpy);
  try {
    console.log('Making request to API with token:', AUTH_TOKEN);
    const response = await axios.get(`http://20.244.56.144/test/companies/${cpy}/categories/TV/products?top=10&minPrice=1&maxPrice=10000`,{
      headers: {
        'Authorization': `Bearer ${AUTH_TOKEN}`
      }
    });
    console.log('Success:', response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Error making API request:', error.response ? error.response.data : error.message);
    res.status(500).send('An error occurred while fetching data');  
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
