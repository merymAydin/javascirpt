const express = require("express");
const router = express.Router();
const Product = require("../models/Product");


//Create Product endpoint start
router.post("/", async (req, res) => {
  try {
    const { name, images, price, description, colors, stock, category } =
      req.body;
    const newProduct = new Product({
      name,
      image,
      price,
      description,
      colors,
      stock,
      category,
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    res.send(500).json({ error: "Server error..." });
  }
});

//create product endpoint end
/************************************************************************/

//get Product endpoint start
router.get("/", async (req, res) => {
  try {
    const productid = req.params.productid;
    const product = await product.findById(productid);
    res.staturs(201).json(ProductList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error..." });
  }
});

//get product endpoint end

/************************************************************************/
router.get("/:productid",async(req,res) => {
    try {
        const productid = req.params.productid;
        const product = await Category.findById(productid);
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error..." })
    }
})


//get categories by ID endpoint end
/************************************************************************/
//update product endpoint start

router.put("/", async (req, res) => {
  try {
    const updateProductInfo = req.body;
    const product = await Product.findById(updateProductInfo);
    if (!product) {
      res.status(404).json({ error: "Product not found..." });
    }
    const updatedProduct = await Product.findByIdAndUpdate(
      product._id,
      updateProductInfo);
      res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error..." });
  }
});
//update product endpoint end

/************************************************************************/
//delete product endpoint start
router.delete("/",async(req,res) => {
    try {
        const deletedProductInfo = req.body;
        const deletedProduct = await Product.findByIdAndDelete(deletedProductInfo._id);
        if (!deletedProduct) {
            return res.status(404).json({error : "category not found"});
        }
        res.status(200).json({Message : "deleted succesfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error..." });
    }
})


module.exports = router;
