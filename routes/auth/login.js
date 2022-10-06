const express =require('express')
const bcrypt = require('bcrypt');
const user = require('./model/Auth')
const router= express.Router();

router.get('/', (req,res)=>{
    res.render('login/login')
})
router.post('/',async (req,res)=>{
    const userdoc =await user.findOne({'email': req.body.email})
    if(userdoc!= null){
       if(bcrypt.compare(res.body.password, userdoc.pass)) {
        res.render('index1')
       }
    }
})

module.exports= router