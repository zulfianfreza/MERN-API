const express = require('express');

const app = express();

app.use(() =>{
    console.log('Hello server...');
    console.log('hello'); 
})

app.listen(4000);