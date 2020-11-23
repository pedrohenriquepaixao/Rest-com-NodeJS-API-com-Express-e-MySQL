const customExpress = require('./config/customExpress');

const app = customExpress();

app.listen(process.env.PORT_HOST,()=>{
  console.log(`API ONLINE: http://localhost:${process.env.PORT_HOST}`)
})