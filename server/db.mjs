import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

async function connect_to_db () {

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to database!")
    } catch (err) {
        console.log(err.message)
    }
}

export default connect_to_db