import User from "../models/userModel.js"

export const loginController = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email, password, verified:true});
        if(user){
            res.status(200).send(user)
        } else {
            res.json({
                message: "Log in Failed",
                user
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const registerController = async (req, res) => {
    try {
        const newUser = new User({...req.body, verified: true});
        await newUser.save();
        res.status(200).send("New User Created Successfuly")
    }catch (error) {
        console.log(error);
    }
}