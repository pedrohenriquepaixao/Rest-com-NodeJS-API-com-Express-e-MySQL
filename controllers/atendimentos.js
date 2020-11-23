module.exports = (app) => {
  app.get("/atendimentos", (req, res) => {
    res.send("Pagina: Atendimentos;");
  });

  app.post("/atendimentos", (req, res) => {
    console.log(req.body);
    res.send("Você esta na rota de /atendimentos/post")
  });
};
