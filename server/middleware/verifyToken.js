
const jwt = require('jsonwebtoken');
require("dotenv").config();

const verifyToken  =(req,res,next)=>{
    const authHedear = req.body.accessToken
    if(authHedear){
        const user= jwt.verify(authHedear , process.env.JWT_KEY , (err , user)=>{
                if(err) return res.status(400).json("Some error occured");
                req.user = user;
                next();
        
        })

}else{
    return res.status(400).json("plesae logIN")
}
console.log("next")
next()

}
module.exports  = {verifyToken};