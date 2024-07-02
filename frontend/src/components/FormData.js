import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function DataForm() {
  const [data, setData] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/data', { message: { data } })
      .then(response => {
        console.log(data)
        navigate('/cart',{ state: { key: {
          data:"data",
          value:"value"
        } } })
        setResponseMessage(response.data);
        setData('');
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div>
      <h1>Data Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Enter some data"
        />
        <button type="submit">Submit</button>
      </form>
      <p>{responseMessage}</p>
    </div>
  );
}

export default DataForm;
