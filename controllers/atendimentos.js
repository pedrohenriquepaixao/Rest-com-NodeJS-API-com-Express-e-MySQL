module.exports = (app) => {
  app.get("/atendimentos", (req, res) => {
    res.send("Pagina: Atendimentos;");
  });
};
