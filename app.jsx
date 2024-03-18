require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/products.routes");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
    res.send("Welcome to crud api!");
});

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@backenddb.jfcmlko.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB`)
    .then(() => {
        console.log("Database connected");
        app.listen(port, () => {
            console.log(`Server is listening at http://localhost:${port}`);
        })
    })
    .catch((error) => {
        console.error('Connection failed:', error.message);
    })

