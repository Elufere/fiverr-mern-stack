import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const hash = bcrypt.hashSync(req.body.password, 10);
        const newUser = new User({
            ...req.body,
            password: hash,
        });

        await newUser.save();
        res.status(201).send("user has been created!");
    } catch (error) {
        res.status(500).send('Error registering user');
    }
};

export const login = async (req,res) => {
    try{
        const user = await User.findOne({username: req.body.username});
        if(!user) return res.status(404).send("user not found!");

        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        if(!isCorrect) return res.status(404).send("username or password not correct!");

        const token = jwt.sign({
            id: user._id,
            isSeller: user.isSeller,
        },
         process.env.JWT_KEY
    );

        const {password, ...info} = user._doc;
        res.cookie("accessToken", token, {
            httpOnly: true,
        })
        .status(201)
        .send(info);
    }catch(err) {
        res.status(500).send('Something went wrong!');
    }
}; 

export const logout = async (req,res) => {
    
}