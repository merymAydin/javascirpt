const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

router.get("/",(req,res) =>{
    res.send("Categories Page");
})
module.exports = router;