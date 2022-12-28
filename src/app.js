const express = require('express');
const app = express()
const port = process.env.PORT || 8000;
require("./database/db");
const empleadoRouter = require("./router/empleadoRouter");

app.use(express.json())
app.use(empleadoRouter);


app.listen(port,()=>{
    console.log(`servidor funcionando en el puerto ${port}`);
});

