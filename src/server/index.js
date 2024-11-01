import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { router as studentRoute } from "./route/student.route.js"
const app = express();

//middleware configuration

// app.use(cors({
//   origin: 'http://localhost:5174',
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// }));

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:5174");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false}))

//routes
app.use("/shaybah", studentRoute);

//root Route
app.get('/', (req,res) => {
  res.send("Hello Ashimolowo💦 API")
});

//connect to mongodb
mongoose.connect('mongodb+srv://royins64:xwwRPK5vLR66OOHi@fullstackpractice1.zyz96.mongodb.net/?retryWrites=true&w=majority&appName=fullstackPractice1')
.then(() => {
    console.log("connected successfully 💚");
    app.listen(3005, () => {
      console.log("server is running on port 3005");
      
    })
    
}).catch((err) => {
    console.log("connection failed🧨");
    
});