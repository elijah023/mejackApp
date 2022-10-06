const express =require('express')
const bcrypt = require('bcrypt');
const user = require('./model/Auth')
const router= express.Router();


const saltRounds = 10;

router.get('/', async (req,res)=>{
    res.render('./signin/signin')
})
router.post('/',async (req,res,next)=>{
    console.log(req.body.email)
    const userdoc =await user.findOne({'email': req.body.email})
     if((userdoc.email != req.body.email&& (userdoc.email!=null) || req.body.password === req.body.password2){ 
            try {
                const password= await bcrypt.hash(req.body.password, saltRounds);
                const User = new user(
                {
                 name: req.body.name,
                 email: req.body.email,
                 birthDate: req.body.birthdate,
                 pass:password
                })
                await User.save()
             return res.render('index1')
          
                } 
                catch (error) {
                     res.render('signin/signin', {
                     errorMessage:' Invalid username or password !!!'
            });
        }
        }
        else{
            res.status(400).send('error')
        }
})

module.exports= router