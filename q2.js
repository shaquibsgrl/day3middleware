const express=require("express");

const app=express();

app.use(logger)

app.get("/books/:name",(req,res)=>{
return res.send({bookname:"req.name"});
})

function logger(req,res,next){
    req.name = req.params.name;
    next()
}

app.listen(4009,(req,res)=>{
console.log("Listening to 4009")

})