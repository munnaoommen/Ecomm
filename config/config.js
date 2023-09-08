const mongoose = require("mongoose")
let url = "mongodb+srv://munna:123@cluster0.ixvegku.mongodb.net/test?retryWrites=true&w=majority"
const connectDB = () => {
    return mongoose.connect(url)
}

module.exports = connectDB;