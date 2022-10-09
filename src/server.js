import express from 'express'
import { env }  from './config/environment.js'
import path from 'path'

const app = express();
const port =  env.app.port;

app.get("/",  (req, res) => {
    res.status(200).send("Kitra backend working")
})

app.listen(port, () => {
    console.log(`listening to requests on http://localhost:${port}`)
})