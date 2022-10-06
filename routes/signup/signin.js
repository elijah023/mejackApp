const express =require('express')
const user = require('./model/signinmodel')
const router= express.Router();

router.get('/', (req,res)=>{
    res.render('./signin/signin')
})
router.post('/',async (req,res)=>{
    const User = new user({
        name: req.body.name,
        email: req.body.email,
        birthDate: req.body.birthdate,
        pass:req.body.password
            })
            try {
                await User.save()
            res.redirect('/')
          
        } catch (error) {
            res.render('signin/signin', {
                User:User,
                errorMessage:' Invalid username or password !!!'
            });
            console.error(error)
        }
        
})

module.exports= router