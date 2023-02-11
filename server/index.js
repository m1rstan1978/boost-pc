const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const cors = require('cors')
const server = require('http').Server(app)

app.use(express.json())
app.use(cors())

const data = {
    id:1,
    name:5,
}
app.get('/data', (req,res) => {
   res.send(JSON.stringify(data))
})

server.listen(PORT,() => {
    console.log(`Все отлично, сервер работает на порте: ${PORT}`)
})