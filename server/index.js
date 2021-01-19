require('dotenv').config();
const massive = require('massive');
const express = require('express');
const session = require('express-session');
const {SESSION_SECRET, CONNECTION_STRING, PORT} = process.env
const app = express()

app.use(express.json())

app.listen(PORT, ()=>console.log(`listening on ${PORT}`))