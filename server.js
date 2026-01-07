const express = require('express') //import express
const app = express() //instance of express

const path = require('path') //import path
const port = 3000

//Middleware
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.get('/', (req, res) => { //Get request handler
    res.sendFile('public/index.html')
}) // to Home/Root

app.get('/contact', (req, res) => { //Get request handler
    res.sendFile(path.join(__dirname, 'public/contact.html'))
}) //to Contact


//Message
app.listen(port, () =>{
    console.log(`Server is running at http://localhost:${port}. 
        Go check it out! （*゜ー゜*）`)
})