let  express=require("express")
let app=express();
var port=3011;


app.get("/red",(req,res)=>{
res.send("hello akhila");
})

  

app.listen(port,()=>{
console.log(`${port}is working`)
})