const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config({path:'./config/.env'})
const app =express()
app.use(express.json())
app.use(cors())
app.use('/api',require('./routes/userRoutes'))
PORT =process.env.PORT || 8888
mongoose.connect(`mongodb+srv://${process.env.name}:${process.env.password}@${process.env.clusterName}.pu68n7p.mongodb.net/CraftersCorner?retryWrites=true&w=majority`)
.then(console.log('database connected successfully')).catch(err=>console.error(err))
app.listen(PORT,console.log('server is live in port '+PORT))