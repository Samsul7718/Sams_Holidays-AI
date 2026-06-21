const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the root directory
app.use(express.static(__dirname));

// Route to check server health
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// For any other requests, serve the index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
