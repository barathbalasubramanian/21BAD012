const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors'); 
// require axios
const axios = require('axios');

app.use(express.json());
app.use(cors())

app.get('/register', async(req, res) => {
   
    try {
        const response = await axios.post('http://20.244.56.144/test/register', {
            "companyName":"Kumaraguru College of Technology",
            "ownerName": "Barathkumar B",
            "rollNo": "21BAD012",
            "ownerEmail": "barathkumar.21ad@kct.ac.in",
            "accessCode": "XmPwdN"
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        console.log('Success:', response.data);
      } catch (error) {
        console.error('Error:', error);
      }
});



app.get('/auth', async(req, res) => {
    try {
        const response = await axios.post('http://20.244.56.144/test/auth', {
            "companyName": 'Kumaraguru College of Technology',
            "clientID": '786effe5-41c8-4491-94c8-1b288d662ea5',
            "clientSecret": 'BjXonDcrswbrmwsV',
            "ownerName": 'Barathkumar B',
            "ownerEmail": 'barathkumar.21ad@kct.ac.in',
            "rollNo": '21BAD012'
          }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        console.log('Success:', response.data);
      } catch (error) {
        console.error('Error:', error);
      }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
