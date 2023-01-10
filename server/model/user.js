const mongoose=require('mongoose')

const userSchema=new mongoose.Schema(
    {
    email:String,
    password:String
    },{timestamps:true}
)

const user=mongoose.model('User',userSchema)

module.exports=user;