const express = require('express');
const authRouter = require('./routes/authRoute');
const app = express()
require('dotenv').config()



app.use('/auth', authRouter)

const port = process.env.PORT || 8888;
app.listen(port, ()=>console.log('Server on',port))