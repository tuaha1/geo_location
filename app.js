// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Define a route
app.get('/', (req, res) => {

    const funnyResponse = {
        name: "Bashayar",
        best_friend: "Manar",
        interests: ["micro service", "ciam"]
    };

    res.json(funnyResponse);
});

// Set up the server to listen on a specific port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
