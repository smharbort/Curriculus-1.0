import express from "express"
import connect_to_db from "./db.mjs"
import cors from "cors"

const app = express()

app.use(cors({
    origin: "http://localhost:3013"
}))
app.use(express.json())

connect_to_db()

app.get("/", (req, res) => {
    res.send("success")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server listening on port: ${ PORT }`)
})