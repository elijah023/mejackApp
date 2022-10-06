const mongoose= require('mongoose')

const userSchema=new mongoose.Schema({
name :{
    type:String,
    required: true
},
email :{
    type:String,
    required: true
},
birthDate :{
    type: Date,
    required: true
},
pass :{
    type:String,
    required: true
}
})

module.exports= mongoose.model('users', userSchema)