const express = require('express')
const path = require('path')
// const favicon = require('serve-favicon')
const logger = require('morgan')


require('dotenv').config()

// connect database
require('./config/database')

const app = express()

app.use(logger('dev'))
app.use(express.json())
// app.use(favicon(path.join(__dirname,'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname,'build')))


