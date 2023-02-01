
const express = require("express")

const PORT = process.env.port || 3001

const app =  express()

app.listen(PORT,() => {
console.log(`Server start on port ${PORT}`)
})

app.get("", (req,res) => {
res.json({

goods:[
    {id:1,path:'http://localhost:3000/mercedesBenz.jpg',name:"MercedesBenz",price:400},
]
})
})