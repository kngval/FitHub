const UserModel = require('../models/userSchema');

//login user

const loginUser = async(req,res) => {
    res.json({mssg: "Login user"})
}

//signup

const signupUser = async(req,res) => {
    const { email,password } = req.body

    try {
        const user = await UserModel.signup(email,password);
        res.status(200).json({email, user})      
    } catch (error) {
        res.status(400).json({error: error.msg})
    }

    res.json({mssg: "Signup user"})
}


module.exports ={
    loginUser,
    signupUser
}