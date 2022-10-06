const sequelize =require('sequelize');
const mongoose = require('mongoose')    
const dotenv=require('dotenv')
dotenv.config('.env')
 //
 const Connect = async () =>{
    try {
        const conn0= await new sequelize('postgres://postgres:Blak_sarac3ns@localhost:5432/users')
        conn0.authenticate();
        console.log(`successful database connection `)
        const conn1 = await new mongoose.connect(process.env.URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
           })
         const db =conn1.connection
         console.log(`successful connection at ${db.host}@${db.port}`)
     
    } catch (error) {
        console.error(`unable to connect and ${error}`)
    } 
 }




module.exports=Connect