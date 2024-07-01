const express = require('express'); // Import the Express module
const app = express(); // Create an instance of an Express app
const { dbConnect } = require('./config/databaseConnect'); // Import the database connection function
const dotenv = require('dotenv'); // Import dotenv for environment variables
const cors = require('cors'); // Import CORS middleware
const authRoutes=require('./routes/Auth')
const schoolRoutes=require('./routes/School')
dotenv.config(); // Load environment variables from a .env file

app.use(express.json()); // Middleware to parse JSON bodies

// Use CORS middleware
app.use(cors({origin:"*"}));

app.use("/api/v1/auth",authRoutes);
app.use('/api/v1/school',schoolRoutes);
// Connect to the database
dbConnect()
    .then(() => {
        console.log("Database connected successfully");
        console.log(process.env.PORT);
        // Start the server on the port defined in environment variables
        const server = app.listen(process.env.PORT, () => {
            console.log("Server is started");
        });

        // Handle server startup errors
        server.on('error', (error) => {
            console.error("Server failed to start:", error);
            process.exit(1); // Exit the process with a failure code
        });
    })
    .catch((error) => {
        console.error("DB Connection Failed:", error);
        process.exit(1); // Exit the process with a failure code
    });
