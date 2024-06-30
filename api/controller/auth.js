import User from "../models/user.js";

export const register = async (req, res) => {
    try {
        const newUser = new User({
            username:"test",
            email:"test",
            password:"test",
            country:"test",
        });
        await newUser.save();
        res.status(201).send("user has been created!");
    } catch (error) {
        res.status(500).send('Error registering user');
    }
};

export const login = async (req,res) => {
    
}

export const logout = async (req,res) => {
    
}