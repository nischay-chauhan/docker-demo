import express from "express"
import dotenv from "dotenv"
dotenv.config()
const app = express()

app.get('/', (req, res) =>{
res.send('<h1>Hello World DDD</h1>')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT , () => console.log(`Server started on port ${PORT}`))