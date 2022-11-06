const AutoresController = require("../controllers/autores.controller")
const QuotesController = require("../controllers/quote.controller")

module.exports = app => {

  //Autores
  app.get("/api/autores",AutoresController.findAll);
  app.post("/api/autores",AutoresController.createAutore);
  app.get("/api/autores/:id",AutoresController.findOne);
  app.put("/api/autores/:id",AutoresController.update);
  app.delete("/api/autores/:id",AutoresController.delete);

  //Quotes
  app.post("/api/quotes",QuotesController.createQuote);
  app.get("/api/quotes/:idAutore",QuotesController.getQuotesFromAutore);
}