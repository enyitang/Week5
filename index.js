
//setting up the server.

const express = require("express")
const dotenv = require("dotenv")
dotenv.config()

const app = express()

const PORT = process.env.PORT|| 5000

app.listen(PORT, ()=>{

    console.log(`my server is running on ${PORT}`)
})

    // Basic Nodejs Endpoint that handle a GET request.
    app.get("/Array", async (req,res)=>{
        
        res.json({Milk: "Pick Milk", Drug: "Paracetamol", car:"Venza"})
    })


    app.post("/Array", async (req,res)=>{
        
        res.json({Milk: "Pick Milk", fan: "Standing fan", book:"Long note"})
    })

// To know that our server is working we use this syntax:  node index.js and press enter
// and if the curso in our terminal hang it means our server has started runing.