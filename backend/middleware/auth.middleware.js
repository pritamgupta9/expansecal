const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
    const token = req.headers.authorization?.split(' ')[1];
    if(!token) return res.status(401).json({message:"Unauthorized"})

    try{
        const decoded = jwt.verify(token,"nvjnrnfrfelkfdlkfmeklflkf")
        req.user= decoded
        next();
    }
    catch(err){
        res.status(401).json({
            message:'invalid token'
        })

    }
}