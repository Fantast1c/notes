import express from 'express'
import fs from 'fs'
import cors from 'cors'

const PORT = process.env.PORT || 3001;
const server = express();


server.use(express.json())
//server.use(cors)

let data = fs.readFileSync('data.json')

server.get('/', (req, res)=>{
        res.status(200).json(JSON.parse(data))
})
server.post('/', (req, res)=>{
        fs.writeFileSync('data.json', JSON.stringify(req.body))
        res.status(200).json(JSON.parse(data))
})
server.listen(PORT, ()=> console.log("SERVER STARTED"))



