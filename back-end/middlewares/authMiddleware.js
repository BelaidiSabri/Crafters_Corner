const jwt = require('jsonwebtoken')
require("dotenv").config({ path: "./config/.env" });


const authMiddleware = async(req,res,next) =>{
    try {
        const authHeader = req.headers.authorization;
        if(!authHeader) return res.status(401).json({msg:'Authorization heading is missing'})


        const token=authHeader.split(' ')[1]
        decodedtoken =jwt.verify(token,process.env.JWT_SECRET)
        const userID =decodedtoken.id
        const username= decodedtoken.username
        


        req.user={id:userID,username:username}
        next()
    } catch (err) {
        console.log(err);
        res.status(401).json({ msg: 'Invalid token' });
    }
}

module.exports = {authMiddleware}