const UserModel = require('../models/userSchema');

//login user

const loginUser = async(req,res) => {
    res.json({mssg: "Login user"})
}

//signup

const signupUser = async(req,res) => {
    res.json({mssg: "Signup user"})
}


module.exports ={
    loginUser,
    signupUser
}