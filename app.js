// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Set up the server to listen on a specific port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
