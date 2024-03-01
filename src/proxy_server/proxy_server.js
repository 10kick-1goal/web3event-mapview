const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3001; // Choose a port for your proxy server

app.use(express.json());

app.post('/web3event/api/v1/events/query', async (req, res) => {
    try {
        console.log("--------------",req);
        const response = await axios.post('https://www.web3event.org/web3event/api/v1/events/query', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(error.response.status).json(error.response.data);
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server is running on port ${PORT}`);
});