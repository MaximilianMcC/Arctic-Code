// Imports
const express = require('express');
const path = require("path");



// Make the Express app
const app = express();
const port = 3000;

// Add the public directory
app.use(express.static(path.join(__dirname, "public")));







// Start the server
app.listen(port, () => {

    console.log("✅ Server is currently listening on port " + port);
    console.log("Access via localhost: http://127.0.0.1:" + port + "\n");

});