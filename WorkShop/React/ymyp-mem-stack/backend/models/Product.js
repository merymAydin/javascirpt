const mongoose = require("mongoose");


const productSchema = new mongoose.Schema(
    {
        name : { type : String, required : true},
        image : { type : Array, default : []},
        price : { type : Number, default : 0.00},
        description : { type : String, default : ""},
        colors : { type : Array, default:[]},
        stock : {type : Number, default : 0},
        category : { 
            type : mongoose.Schema.Types.ObjectId,
            ref:"Category",
            required : true
        }
    },
    {
        timestamps : true
    }
);

const Product = mongoose.model("Product",productSchema);

module.exports = Product;