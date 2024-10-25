const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://payyavulamukesh:Pmy%4052141@crud.j5qda.mongodb.net/crud");
        console.log("MongoDB connected Successfully");
        
    }catch (error){
        console.log("MongoDB connection error");
    }
}

module.exports = {mongoose, connectDB}