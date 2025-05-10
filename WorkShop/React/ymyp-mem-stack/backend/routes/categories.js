const express = require("express");
const router = express.Router();
const Category = require("../models/Category");



//Create category endpoint start
router.post("/",async(req,res) => {
    try {
        const {name,image} = req.body;
        const newCategory = new Category({name,image});
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error..." })
    }
})

//create category endpoint end

/************************************************************************/   

//get categories endpoint start

router.get("/",async(req,res) => {
    try {
        const CategoryList = await Category.find();
        res.status(200).json(CategoryList);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error..." })
    }
})

//get categories endpoint end
/************************************************************************/   

//get categories by ID endpoint start

//localhost:5000/api/categories/1245557asd
router.get("/:categoryid",async(req,res) => {
    try {
        const categoryid = req.params.categoryid;
        const category = await Category.findById(categoryid);
        res.status(200).json(category);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error..." })
    }
})


//get categories by ID endpoint end
/************************************************************************/   

//update categories by ID endpoint start

router.put("/",async(req,res) => {
    try {
        const updateCategoryInfo = req.body;
        const category = await Category.findById(updateCategoryInfo._id);
        if(!category){
            return res.status(404).json({ error: "Category not found..." });
        }
        const updatedCategory = await Category.findByIdAndUpdate(category._id,updateCategoryInfo);
        res.status(200).json(updatedCategory);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error..." });
    }
})

//update categories by ID endpoint end


/************************************************************************/   
//delete categories by ID endpoint start

router.delete("/",async(req,res) => {
    try {
        const deleteCategoryInfo = req.body;
        const deletedCategory = await Category.findByIdAndDelete(deleteCategoryInfo._id);
        if(!deletedCategory){
            return res.status(404).json({error : "category not found"});
        }
        res.status(200).json({Message : "deleted succesfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error..." })
    }
})
//delete categories by ID endpoint end
/************************************************************************/   
module.exports = router;