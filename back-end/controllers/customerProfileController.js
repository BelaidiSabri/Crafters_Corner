const {customerProfile} = require('../models/ProfilesSchema')

 const createCustomerProfile = async (req,res)=>{
    try {
        const {customerId,cart,favoriteArtisans}=req.body
        const createProfile =await customerProfile.create({customerId,cart,favoriteArtisans})
        res.status(200).json({msg:'profile succesfully created',createProfile})
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: "Server problem" });
    }
 }

 module.exports ={createCustomerProfile}