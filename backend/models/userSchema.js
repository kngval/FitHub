const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema
const validator = require('validator')
const userSchema = new Schema({
    email:{
        type: String,
        unique: true,
        required:true
    },
    password:{
        type:String,
        required: true
    }
})

userSchema.statics.signup = async function(email,password){

    const exists = await this.findOne({email})
    if(exists){
        throw Error("Email already exists")
    }

    if(!email || !password){
        throw Error('All fields must be filled')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong enough')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password,salt)

    const user = await this.create({email,password: hashedPass})

    return user
}

//static login

userSchema.statics.login = async function(email,password){
    if(!email || !password){
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({email})
    if(!user){
        throw Error("No user found")
    }

    const match = await bcrypt.compare(password,user.password)

    if(!match){
        throw Error('Invalid login credentials')
    }
    return user

}
module.exports = mongoose.model('User',userSchema);
