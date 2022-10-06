const express =require('express')
const bcrypt = require('bcrypt');
const user = require('./model/Auth')
const router= express.Router();


const saltRounds = 10;

router.get('/', async (req,res)=>{
    res.render('./signin/signin')
})
router.post('/',async (req,res,next)=>{
   async function write(){ try {
                const password= await bcrypt.hash(req.body.password, saltRounds);
                const User = new user(
                {
                 name: req.body.name,
                 email: req.body.email,
                 birthDate: req.body.birthdate,
                 pass:password
                })
                console.log(User)
                await User.save()
             return res.render('index1')
          
                } 
                catch (error) {
                     res.render('signin/signin', {
                     errorMessage:' Invalid username or password !!!'
            })
            console.error(error)
        }}
        
    const userdoc =await user.findOne({'email': req.body.email})
    if(userdoc!=null){
     if(userdoc.email != req.body.email && req.body.password === req.body.password2){ 
        console.log(userdoc.email)
        write() 
        }
        else{
            res.status(400).send('error')
        }}
        else{
            console.log(userdoc)
            write()
        }
})

module.exports= router