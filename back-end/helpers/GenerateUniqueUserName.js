const User = require("../models/userSchema");



const GenerateUniqueUserName = async (name,lastname)=>{
    const fullname = `${name}${lastname}`
    let username = fullname

    let userExists = true

    while(userExists){
        const existingUser = await User.findOne({username})
        if (!existingUser){
            userExists=false
        }
        else {
            const randomNumber =Math.floor(Math.random()*10000)
            username =`${fullname}${randomNumber}`
        }
    }
    return username 

}
module.exports = GenerateUniqueUserName