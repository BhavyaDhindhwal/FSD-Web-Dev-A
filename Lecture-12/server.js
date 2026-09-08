const express= require("express")
const productRoutes=require("./routes/productRoutes.js")
const app=express();
const PORT=3000

app.use(express.json());  //json data parse

app.use("/api/products",productRoutes);

app.listen(PORT,()=>console.log("server is running"));