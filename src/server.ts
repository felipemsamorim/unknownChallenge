import express from "express";
import bodyParser from 'body-parser'
import cors from 'cors'
import {routes} from './routes'

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
routes(app)

app.use((_req, res) => res.status(404).json({ error: 'Route not found' }))

export default app;