const { mongoose } = require("../Database/Database");

const userSchema = new mongoose.Schema({
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    Phone: { type: String, required: true },
    Address: { type: String },
    Gender: { type: String }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
