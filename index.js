const express=require("express");
const app=express();
const {main,user} =require("./database")
const port=4568;

main()
.then(()=>{
    console.log("Connected to Database");
    app.listen(port,()=>{
        console.log(`the server is listening to ${port}`);
    })
})
app.get("/info",async (req,res)=>{
    const ans=await user.find({})
    res.send(ans);
})
app.post("/info",async (req,res)=>{
    const ans=await user.find();
    ans.insert(req.body);
    res.send("Done Nigga");
})