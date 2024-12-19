import express from "express"
import connect_to_db from "./db.mjs"

const app = express()
connect_to_db()

app.get("/", (req, res) => {
    res.send("success")
})

const port = 3012
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})