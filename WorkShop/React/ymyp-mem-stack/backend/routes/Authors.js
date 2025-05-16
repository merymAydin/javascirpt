const express = require("express");
const router = express.Router();
const Author = require("../models/Author");

//create author endpoint start
router.post("/",async(req,res)=> {
    try {
        const {firstname,lastname} = req.body;
        const newAuthor = new Author({firstname,lastname});
        await newAuthor.save();
        res.status(201).json(newAuthor);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error..." })
    }
})

//create author endpoint end
/*************************************************/
//get authors endpoint start
router.get("/",async(req,res)=> {
    try {
     const AuthorList = await Author.find();
     res.status(200).json(AuthorList);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error..." })
    }
})
//get authors endpoint end
/*************************************************/
//get author by id endpoint start
router.get("/:authorid",async(req,res) => {
    try {
        const authorid = req.params.authorid;
        const author = await Author.findById(authorid);
        res.status(200).json(author)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error..." })
    }
})
//get author by id endpoint end
/*************************/
//update author endpoint start
router.put("/",async(req,res)=> {
    try {
        const updateAuthorInfo = req.body;
        const author = await Author.findById(updateAuthorInfo._id);
        if(!author){
            return res.status(404).json({ error: "Author not found..." });
        }
        const updatedAuthor = await Author.findByIdAndUpdate(author._id,updateAuthorInfo);
        res.status(200).json(updatedAuthor);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error..." });
    }
})
//update auhtor endpoint end
/********************************************************/
//delete author endpoint start
router.delete("/",async(req,res) => {
    try {
        const deleteAuthorInfo = req.body;
        const deletedauthor = await Author.findByIdAndDelete(deleteAuthorInfo._id);
        if (!deletedauthor) {
            return res.status(404).json({ error: "Author not found..." });
        }
        res.status(200).json({Message : "deleted succesfully"});
    } catch (error) {
         console.log(error);
        res.status(500).json({ error: "Server error..." });
    }
})

module.exports = router;