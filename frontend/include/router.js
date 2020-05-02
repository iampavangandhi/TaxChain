const express = require('express')
const router = express.Router()

router.get('/',(req,res) => {
	res.render('index',{pageTitle : "Hello World"})
})

router.get('/addrecords',(req,res) => {
	res.render('addrecords',{pageTitle:"Add Records"})
})

router.get('/showrecords',(req,res) => {
	res.render('showrecords',{pageTitle:"Show Records"})
})

module.exports = router;