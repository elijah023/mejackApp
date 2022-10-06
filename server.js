const express = require('express')
const ejs= require('ejs')
const dotenv =require('dotenv')
const path = require('path')
const parser=require('body-parser')
const ejsLayouts = require('express-ejs-layouts')
const app=express()

const loginRouter =require('./routes/login/login')
const signinRouter =require('./routes/signup/signin')
const db =require('./db')

dotenv.config('.env')

app.set('views', './views')
app.set('view engine', 'ejs')
app.set('layout', 'layouts/index1')

db()
app.use(ejsLayouts)
app.use(parser.urlencoded({limit:'10mb', extended:false}))
app.use('public', express.static(__dirname+'/public'))
app.use('/css', express.static(__dirname+'/public/css'))
app.use('/website', express.static(__dirname+'/public/websites'))
app.use('/images', express.static(__dirname+'/public/images'))
app.use('/login', loginRouter)
app.use('/signin', signinRouter)


app.get('/',(req,res)=>{
    res.redirect('/website/index.html')
 })
 app.get('/:id',(req,res)=>{
    res.send('index')
 })



app.listen(process.env.PORT|| 3000)
console.log(`listening at ${process.env.PORT}`)