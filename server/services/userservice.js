const User = require("../models/user");

class UserService {
    async createUser(FirstName, LastName, email, Phone, Address, Gender) {
        const newUser = new User({ FirstName, LastName, email, Phone, Address, Gender });
        return await newUser.save();
    }
    async getAllUsers() {
        return await User.find();
    }
    async getUserById(userId) {
        return await User.findById(userId);
    }

    async updateUser(userId, updatedData){
       return await User.findByIdAndUpdate(userId, updatedData, {
            new : true
        })
    }

    async deleteUser(userId) {
        return await User.findByIdAndDelete(userId);
    }
};

module.exports = new UserService();
