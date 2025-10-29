import mongoose from 'mongoose'

const userShema = new mongoose.Schema({
    _id:{type: String, required:true},
    name:{type:String,required:true},
    email:{type:String,required:true, unique:true},
    imageUrl: {type:String, required:true},
    cartItems:{typre:Object,default:{}}
},{minimaze:false})

const User = mongoose.models.user || mongoose.model('user',userShema)

export default User