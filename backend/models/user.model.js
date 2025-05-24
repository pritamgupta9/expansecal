const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email:{type:String,unique:true,required:true},
    password:String
})
UserSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password,10);
    next();
})

UserSchema.methods.comparePass = function(pass){
    return bcrypt.compare(pass,this.password);
}

module.exports = mongoose.model("user",UserSchema);