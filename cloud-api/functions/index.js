import Functions from "firebase-functions"
import express from "express"
import { createUser, getAllUsers} from "./src/users.js"
const app = express()

app.get('/users', getAllUsers)
app.post('/users',createUser)

app.get('/test', (req,res) => res.send('Our first cloud API works, MF!'))

export const api = Functions.https.onRequest(app)
