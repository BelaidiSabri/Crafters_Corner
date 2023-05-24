 const {artisanProfile} = require('../models/ProfilesSchema')

 const createArtisanProfile = async (req,res)=>{
    try {
        const {name,lastname,artisanId,profilePhoto,coverPhoto,colorPalette,selfDescription,specialities}=req.body
        const createProfile =await artisanProfile.create({name,lastname,artisanId,profilePhoto,coverPhoto,colorPalette,selfDescription,specialities})
        res.status(200).json({msg:'profile succesfully created',createProfile})
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: "Server problem" });
    }
 }

 const getArtisans = async (req,res)=>{
    try {
        const artisanList = await artisanProfile.find()
        res.status(200).json({msg:'list of artisan profiles',artisanList})
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: "Server problem" });
    }
 }

 const getArtisan = async (req,res)=>{
    try {
        const artisan = await artisanProfile.findOne({artisanID:req.user.id})
        if (!artisan) {
            return res
              .status(404)
              .json({ success: false, msg: "Artisan profile not found" });
          }
          res.status(200).json({ msg: `Artisan profile of id ${req.user.id}`, artisan });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: "Server problem" });
    }
 }
 const getArtisanProfileByID= async (req, res) => {
    try {
      const artisan = await artisanProfile.findOne({ artisanId: req.user.id });
      if (!artisan) {
        return res
          .status(404)
          .json({ success: false, msg: "Artisan profile not found" });
      }
      res.status(200).json({ msg: `Artisan profile of id ${req.params.id}`, artisan });
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "Server problem" });
    }
  };
  const getArtisanProfileByUserName= async (req, res) => {
    try {
      const artisan = await artisanProfile.findOne({ username:req.params.username });
      if (!artisan) {
        return res
          .status(404)
          .json({ success: false, msg: "Artisan profile not found" });
      }
      res.status(200).json({ msg: `Artisan profile of username ${req.params.username}`, artisan });
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "Server problem" });
    }
  };

 module.exports ={createArtisanProfile,getArtisans,getArtisanProfileByID,getArtisanProfileByUserName}