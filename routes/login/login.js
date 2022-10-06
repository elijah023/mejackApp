const express =require('express')
const router= express.Router();

router.get('/', (req,res)=>{
    res.render('login/login')
})
router.post('/',async (req,res)=>{
 
})

module.exports= router