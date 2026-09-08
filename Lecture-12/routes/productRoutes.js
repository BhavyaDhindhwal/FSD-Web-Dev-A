const express=require("express");
const router=express.Router();
const productController=require("../controller/productController.js")


//Read
router.get("/",productController.getProducts)
router.get("/:id",productController.getProductById)

////Create 
router.post("/",productController.addProduct)

//Update
router.put("/:id",productController.updateProduct)

//Delete
router.delete("/:id",productController.deleteProduct)

module.exports=router