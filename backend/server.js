import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'


//app config
const app = express() 
const port = process.env.PORT || 4000

//connection with DB and Cloudinary
connectDB();
connectCloudinary();

//middlewares
app.use(express.json());
app.use(cors());

//API endpoints or mounting
app.use("/api/admin", adminRouter)
app.use("/api/doctor", doctorRouter)
app.use("/api/user", userRouter)


app.get('/', (req, res) => {
    res.send("API WORKING GREAT")
})

//start app
app.listen(port, () => console.log("Server Started At PORT", port))
