const express= require("express")

const app=express();
const PORT=3000

app.use(express.json());  //json data parse

const products=[
    {
        id:1,
        name:"Hp Paviliion",
        category:"Laptop",
        price:50000
    },
    {
        id:2,
        name:"Iphone 17 pro max",
        category:"Mobile",
        price:30000
    },
    {
        id:3,
        name:"Ipad pro",
        category:"Tablet",
        price:20000
    }
]

app.get("/api/products",(req,res)=>{  //Read
    res.json(products);
})

app.get("/api/products/:id",(req,res)=>{  //Read
    const id=req.params.id;
    console.log(id)
    const result=products.find((product)=>product.id==id);
    if(result==undefined){
        res.status(404).json({success:false,message:"Product Not Found"});
    }
    res.json({success:true,result});
})

////Create 

app.post("/api/products",(req,res)=>{
    const product=req.body;
    products.push({id:products.length+1,...product});
    res.json({success:true,product});
})


//Update

app.put("/api/products/:id",(req,res)=>{
    const id=req.params.id;
    const product=req.body;
    const result=products.find((product)=>product.id==id);
    if(result==undefined){
        res.status(404).json({success:false,message:"Product Not Found"});
    }
    result.name=product.name;
    result.category=product.category;
    result.price=product.price;
    res.json({success:true,result});
})

//Delete

app.delete("/api/products/:id",(req,res)=>{
    const id=req.params.id;
    const result=products.find((product)=>product.id==id);
    if(result==undefined){
        res.status(404).json({success:false,message:"Product Not Found"});
    }
    const index=products.indexOf(result);
    products.splice(index,1);
    res.json({success:true,result});
})



app.listen(PORT,()=>console.log("server is running"));