const jwt = require('jsonwebtoken');
const User = require("../models/user.model");

exports.register = async(req,res)=>{
    const user = await User.create(req.body);
    const token = jwt.sign({id:user._id},"nvjnrnfrfelkfdlkfmeklflkf");
    res.json({token})
}

exports.login = async(req,res)=>{
    const user = await user.findOne({email:req.body.email});
    if(!user || !(await user.comparePass(req.body.pass))){
        return res.status(401).json({message:"invalid cred"})
    }

    const token = jwt.sign({id:user._id},"nvjnrnfrfelkfdlkfmeklflkf");
    res.json({token})
}