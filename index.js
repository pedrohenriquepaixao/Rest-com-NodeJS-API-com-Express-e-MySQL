require('dotenv/config');

const express = require('express');
const app = express();

app.get('/atendimentos',(req,res)=>{
  res.send("Pagina: Atendimentos;")
})

app.listen(process.env.PORT_HOST,()=>{
  console.log(`API ONLINE: http://localhost:${process.env.PORT_HOST}`)
})