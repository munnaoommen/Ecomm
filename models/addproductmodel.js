var mongoose = require("mongoose")

const addproductSchema = new mongoose.Schema({
    name : {
        type:String,
        required:[true,"name needed"]
    },
    Brand : {
        type:String,
        required:[true,"Brand needed"]
    },
    Price : {
        type:String,
        required:[true,"Price needed"]
    },
    discription : {
        type:String,
        required:[true,"discription needed"]
    },
    category : {
        type:String,
        required:[true,"category needed"]  
    },
})
module.exports = mongoose.model('addproduct',addproductSchema)