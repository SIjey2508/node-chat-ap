const path = require('path')
const express = require('express')

const app = express()
const publicPath = path.join(__dirname, '../public')
app.use(express.static(publicPath))
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`You're Connected to port ${port}`)
})
app.get('/', (req, res, next) => {
    res.send('This is a test')
    })

 