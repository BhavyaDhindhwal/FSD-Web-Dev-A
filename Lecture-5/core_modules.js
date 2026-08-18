const os=require('os');
const path=require('path');
const fs=require('fs');
const crypto=require('crypto');
const dns=require('dns');

//console.log(os.homedir());
//console.log(os.tmpdir());

//const filePath=path.resolve("core_modules.js");

//const filePath=path.join("FSD-A","lecture-5","core_modules.js");
//console.log(filePath);

//const filePath="FSD-A/lecture-5/core_modules.js"
//console.log(path.basename(filePath));
//console.log(path.dirname(filePath));
//console.log(path.extname(filePath));
// console.log("A")
// const data =fs.readFileSync("./sample.txt","utf-8") //synchronous way
// console.log(data);

// fs.readFile("./sample.txt","utf-8",(err,data)=>{  //asynchronous way
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })           

// console.log("B")

// fs.writeFileSync("./sample.txt","Hello World") //synchronous way

// fs.writeFile("./sample.txt","Hello World Again ",(err)=>{  //asynchronous way
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File written successfully");
//     }       
// })    


// fs.appendFile("./sample.txt","\nHello World  ",(err)=>{  //asynchronous way
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File written successfully");   
//     }       
// })  

// fs.unlink("./sample1.txt",(err)=>{  //asynchronous way
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File deleted successfully");
//     }   
// })


// const password="Love U";
// const hash=crypto.createHash("sha256").update(password).digest("hex"); //same hash generate krega
// // console.log(hash);
// const salt=crypto.randomBytes(16).toString("hex"); //different salt generate krega  
// // console.log(salt);
// const saltedHash=crypto.createHmac("sha256",salt).update(password).digest("hex"); //different hash generate krega
// // console.log(saltedHash);
// const uid=crypto.randomUUID(); //unique id generate krega
// console.log(uid);bn    


// dns.lookup('www.google.com',(err,address,family)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(address);
//         console.log(family);
//     }
// })

// dns.reverse('8.8.8.8',(err,hostnames)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(hostnames);
//     }   
// })


const data = process.argv
// console.log(data);


// console.log(process.version)
// console.log(process.platform)
// console.log(process.arch)
// console.log(process.pid)
// console.log(process.cwd())

// const args = process.argv
// console.log(Number(args[2]) + Number(args[3]));