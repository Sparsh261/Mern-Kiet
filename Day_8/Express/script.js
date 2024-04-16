const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>Welcome GET</h1>')
})

app.post('/',(req,res)=>{
    res.send('<h1>Welcome Post</h1>')
})

app.patch('/',(req,res)=>{
    res.send('<h1>Welcome Patch</h1>')
})

app.delete('/',(req,res)=>{
    res.send('<h1>Welcome Delete</h1>')
})

app.listen(1400);