const express = require('express');
const router = express.Router();

//rotaları oluşturuyoruz (Route)
const categoryRoute = require("./categories");
const productRoute = require("./products");
const authorRoute = require("./authors");

//rota bilgilerini url yolu olarak tanımlıyoruz

//localhost:5000/api/categories
router.use("/categories",categoryRoute);
//localhost:5000/api/products
router.use("/products",productRoute);
//localhost:5000/api/authors
router.use("/authors",authorRoute);

module.exports = router;
