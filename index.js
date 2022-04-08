const express = require("express")
const booksRoute = require("./routes/booksRoutes")

const app = express()


app.use(booksRoute)
//home route
app.get("/", (req, res)=>{
    res.json("Welcome to my library")
})

const PORT = 8000;

app.listen(PORT, ()=>{
    console.log("SERVER IS UP")
    
    })

