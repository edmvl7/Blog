const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const authRoute = require('./routes/auth.route')

dotenv.config();
app.use(express.json())
app.use("/auth", authRoute)


const connectDB = async() => {
    try {
        await mongoose.connect(process.env.DATABASE)
        console.log('Connected to database')
    }
    catch(err) {
        console.log(err)
    }
}

app.listen(process.env.PORT, () => {
    connectDB()
    console.log("Server is running on port " + process.env.PORT)
})