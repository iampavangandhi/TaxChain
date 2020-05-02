const express = require ('express')
const router = express.Router()
const ejs = require('ejs')
const path = require('path')
const routes = require('./include/router')

const app = express()

app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))

app.use(routes)
app.listen(3000) 