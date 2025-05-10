const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());  // Add this middleware to parse JSON request bodies

const mainRoute = require("./routes");

const PORT = 5000;
const MONGO_URL ="mongodb+srv://meryem:1915@cluster0.huzwcc5.mongodb.net/Ymyp61MernStack"

const connect = async() => {
    try{
        await mongoose.connect(MONGO_URL);
        console.log("MongoDB_connected...");
    }
    catch(error){
        console.log(error);
    }
}

app.use("/api",mainRoute);

app.get("/",(req,res) => {
    res.send("localhost => server get metodu");
})

app.listen(PORT,() => {
    connect();
    console.log(`sunucu ${PORT} portu üzerinden yayında...`);
})
