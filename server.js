const express = require('express')
const app = express()
require('dotenv').config()





const port = process.env.PORT || 9999;
app.listen(port, ()=>console.log('Server on',port))