const express = require('express')
const RegisterController = require('./Controllers/RegisterController')
const mongo = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
// const script = require('./Public/JS/script')
const RegisterRouter = require('./Routes/RegisterRoute')
const app = express()
app.use(express.urlencoded({ extended: true }));

// app.use(express.json());

mongo
    .connect(process.env.LINK, {


    }).then(con => {
        // console.log(con.connectaions);
        console.log('connected with moongoses');
    })



app.use(express.json())
app.use('/App', RegisterRouter)
app.use(express.static('./Public'))
app.listen(2000, () => {
    console.log('yes the server has been started');


})
