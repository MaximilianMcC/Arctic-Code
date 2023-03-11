// Imports
const express = require("express");
const { request } = require("http");
const path = require("path");



// Make the Express app
const app = express();
const port = 3000;

// Add the public directory
app.use(express.static(path.join(__dirname, "public")));



// Generate data
app.get("/generate-data", (request, response) => {

    // Get the query parameters to figure out what question they need data for
    const questionNumber = request.query.question;

    // Generate, then return the data
    response.send(generateData(questionNumber));
});




// Start the server
app.listen(port, () => {

    console.log("✅ Server is currently listening on port " + port);
    console.log("Access via localhost: http://127.0.0.1:" + port + "\n");

});















// Generate data for the questions
function generateData(questionNumber) {
    console.log(questionNumber);
    
    let response;

    // Check for what question the data is being generated for
    switch (questionNumber) {

        // Question 1 data
        case "1":

            // Generate 5 sets of data
            let data = "";
            for (let i = 0; i < 5; i++) {

                // Keep generating data, until the data is in a range around about 120
                let currentTotalSum = 0;
                while (currentTotalSum <= randomNumber(95, 265)) {
                    
                    // Add a random number, and update the sum
                    const currentValue = randomNumber(1, 10);
                    data += currentValue + "\n";
                    currentTotalSum += currentValue;
                }

                data += "\n"
            }

            // Return the data
            response = data
            break;
    
        default:
            response = 500;
            break;
    }

    // Return the generated data, or error code.
    return response;
}









function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}