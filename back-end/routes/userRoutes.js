const router = require('express').Router()
const {addProduct,updateProduct,deleteProduct,getProductsbyArtisan,getAllProducts,getProductsbyId} = require('../controllers/productsController')
const {createArtisanProfile,getArtisans,getArtisanProfileByID, getArtisanProfileByUserName}=require('../controllers/artisanProfileController')
const {registerUser,loginUser,getAllUsers} = require('../controllers/userController')
const {validateEmailAndPassword} = require('../middlewares/validators')
const {authMiddleware} = require('../middlewares/authMiddleware')


//user methoods 
router.post("/register",validateEmailAndPassword,registerUser)
router.post("/login",validateEmailAndPassword,loginUser)
router.get('/users',getAllUsers)

//products methods
router.post("/products",addProduct)
router.put("/products/:id",updateProduct)
router.delete("/products/:id",deleteProduct)
router.get("/products",getAllProducts)
router.get("/products/artisan/:id",getProductsbyArtisan)
router.get("/products/:id",getProductsbyId)

//profile methods
router.post ("/profiles/artisan",authMiddleware,createArtisanProfile)
router.get("/profiles/artisans",getArtisans)
//router.get("/profiles/artisan",authMiddleware,getArtisanbyID)
router.get("/profiles/artisan", authMiddleware, getArtisanProfileByID);
router.get("/profile/artisan/:username", getArtisanProfileByUserName);








module.exports = router