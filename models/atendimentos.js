const moment = require('moment');

const conexao = require('../infraestrutura/conexao');

class Atendimento{
  adiciona(atendimento, res){
    const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
    const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS'); 

    const dataEhValida = moment(data).isSameOrAfter(dataCriacao);
    const clienteEhValido = atendimento.cliente.length >= 5;

    const validacoes = [
      {
        nome: 'data',
        valido: dataEhValida,
        mensagem: 'Data deve ser maior ou igual a data atual'
      },
      {
        nome: 'cliente',
        valido: clienteEhValido,
        mensagem: 'Cliente deve ter pelo menos 5 caracteres'
      }
    ]

    const erros = validacoes.filter(campo => !campo.valido)

    const existemErros = erros.length;

    if(existemErros){
      res.status(400).json(erros)
    }else{
      const atendimentoDatado = {...atendimento, dataCriacao,data};

      const sql = `INSERT INTO Atendimentos SET ?`;
      conexao.query(sql,atendimentoDatado,(error,resultados) => {
        if(error){
          res.status(400).json(error)
        }else{
          res.status(201).json(resultados)
        }
      });
    }
    
  };


  listaTudo(){
    const sql = `SELECT * FROM Atendimentos`;
    conexao.query(sql,(error,resultado)=>{
      if(error){
        console.log(error)
      }else{
        return resultado;
        console.log(resultado)
      }
    })
  }
}

module.exports = new Atendimento;