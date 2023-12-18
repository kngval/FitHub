const UserModel = require('../models/userSchema');
const jwt = require('jsonwebtoken')

//login user

const createToken = (_id) =>{
    return jwt.sign({_id},process.env.SECRET, {expiresIn: '3d'})
}

const loginUser = async(req,res) => {
    const { email, password } = req.body

    try {
        const user = await UserModel.login(email,password);
        
        const token = createToken(user._id)

        res.status(200).json({email, token})      
    } catch (error) {
        res.status(400).json({error: error.msg})
    }

}

//signup

const signupUser = async(req,res) => {
    const { email,password } = req.body
    
    try {
        const user = await UserModel.signup(email,password);
        
        const token = createToken(user._id)

        res.status(200).json({email, token})      
    } catch (error) {
         res.status(400).json({error: error.message})
    }

}


module.exports ={
    loginUser,
    signupUser
}