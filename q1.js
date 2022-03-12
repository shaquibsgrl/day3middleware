const express=require("express");

const app=express();

app.use(logger)


app.get("/books",(req,res)=>{
    console.log("hello")
   return res.send("hello")
})

function logger(req,res,next){
console.log("Fetching all books");
next();

}
app.listen(5000,()=>{
    console.log("listening on port 5000")
})