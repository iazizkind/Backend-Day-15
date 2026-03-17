const mongoose=require("mongoose");
const {Schema}=mongoose;
const userSchema=new Schema({
        name:String,
        ScholarId:Number,
        City:String,
        Adhaar:Number,
        Gender:String
    })
    const user=mongoose.model("user",userSchema);
async function main(){
    await mongoose.connect("mongodb+srv://azizlesner:Aziz%40bhai@heusenarmy.edbp7ra.mongodb.net/cle");
    
//     const user1=new user({name:"Aziz Heuse","Adhaar":35667198,"City":"Burigang","Gender":"male"});
//     await user1.save();
//     await user.create({"name":"Ishita","Adhaar":781881878,"City":"Burigang","phone":87899889798})
//     const ans=await user.find({"name":"Ishita"});
//     console.log(ans);
//     return "Done";

}
main().then(()=>{
    console.log("Connected to DB");
}).catch((err)=>console.log(err));
module.exports={
    main,user
}