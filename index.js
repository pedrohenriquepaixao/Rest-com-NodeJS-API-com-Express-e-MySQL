const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/tabelas');

conexao.connect(error=>{
  if(error){
    console.log(error);
  }else{

    console.log("Conectado com sucesso!");

    Tabelas.init(conexao);

    const app = customExpress();

    app.listen(process.env.PORT_HOST,()=>{
      console.log(`API ONLINE: http://localhost:${process.env.PORT_HOST}`)
    })
  }
});

