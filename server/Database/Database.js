const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/crud");
        console.log("MongoDB connected Successfully");
        
    }catch (error){
        console.error(`MongoDB connection error: ${PORT}`);
    }
}

module.exports = {mongoose, connectDB}