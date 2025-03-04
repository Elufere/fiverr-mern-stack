import User from "../models/user.js";
import createError from "../utilis/createError.js";

export const deleteUser = async (req, res, next) => {
    const user = await User.findById(req.params.id);
    
    if(req.userId !== user._id.toString()) {
        return next(createError(403,"You can delete only your account!"));
    }

    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("account deleted");
};

export const getUser = async (req, res, next) => {
    const user = await User.findById(req.params.id).select('-password');
    res.status(200).send(user);
};