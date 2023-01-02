const express = require('express');
const app = express()
const port = process.env.PORT || 8000;
const cors = require('cors');
const path = require('path');
require("./database/db");
const empleadoRouter = require("./router/empleadoRouter");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(empleadoRouter);


app.listen(port,()=>{
    console.log(`servidor funcionando en el puerto ${port}`);
});

