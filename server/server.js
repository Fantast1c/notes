import express from 'express'
import fs from 'fs'
import cors from 'cors'

const PORT = process.env.PORT || 3001;
const server = express();


//CORS
const allowedOrigins = ['http://localhost:3000'];
const options = {
  origin: allowedOrigins
};
server.use(express.json())
server.use(cors(options))


//ROUTING
server.get('/', (req, res)=>{
        res.status(200).json(JSON.parse(fs.readFileSync('data.json')))
})

server.post('/', (req, res)=>{
        fs.readFile('data.json', (err, data) => {
                let json = JSON.parse(data)
                json.push(req.body)
                fs.writeFile("data.json", JSON.stringify(json),
                (err, result)=>{
                        if(err) console.log('Ошибка записи файла, операция добавления:', err);
                      })
                      res.status(200).json(json)
            });
})
server.put('/',(req,res)=>{
        fs.writeFile("data.json", JSON.stringify(req.body),
        (err, result)=>{
                if(err) console.log('Ошибка записи файла, операция изменения:', err);
              })
 res.status(200).json(JSON.parse(fs.readFileSync('data.json')))
})

server.delete('/',(req,res)=>{
        fs.writeFile("data.json", JSON.stringify(req.body),
        (err, result)=>{
                if(err) console.log('Ошибка записи файла, операция удаления:', err);
              })
 res.status(200).json(JSON.parse(fs.readFileSync('data.json')))
})


server.listen(PORT, ()=> console.log("SERVER STARTED"))
