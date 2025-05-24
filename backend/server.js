const express = require('express');
const mongoose = require("mongoose");
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use('/api',routes);
mongoose.connect('mongodb+srv://preetam:preetam@cluster0.wg3g3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log("Db Connected");
    
}).catch(err=>
    console.log(err)  
)
app.listen(8080,()=>console.log("server running at 8080")
)