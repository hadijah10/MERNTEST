require ('dotenv').config()

const express = require("express");
const { default: mongoose } = require('mongoose');
const app = express()
const cors = require('cors')

const workRoutes = require('./routes/workout')

//middleware
app.use(express.json()) //middleware for logging that request has a body attached to it used for updatng or patch.
app.use(cors())
app.use((req,res,next) => {
console.log(req.path,req.method);
next();
})

//app.get('/',(req,res) => {
//res.send("hey")
//res.json({msg:"Akwaaba"})
//})

//routes
app.use('/api/workouts',workRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(()=>{
    //request listening
app.listen(process.env.PORT,() => {
    console.log("Entered",process.env.PORT)
})
 
})
.catch(err => console.log(err))