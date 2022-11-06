const Autore = require("../models/autores.model");
const { Quote } = require("../models/quote.model");


module.exports.createQuote = async (req, res) =>{
  try{
    const { content, book, quoteType, idAutore} = req.body;
    const quote = await Quote.create({content, book, quoteType});
    const autore = await Autore.findById(idAutore).exec();
    autore.quotes.push(quote)
    await autore.save();
    res.json({message:"", quote: quote})

  }catch(err){
    res.json({message:"Algo salio mal",errors:err.errors})
  }
}

module.exports.getQuotesFromAutore = async (req, res) =>{
  try{
    const {idAutore} = req.params;
    const autore = await Autore.findById(idAutore).populate("quotes").exec();
    console.log("QUOTES DEL AUTORE", autore.quotes);
    res.json({message:"", quotes: autore.quotes })
  }catch(err){
    res.json({message:"Algo salio mal",errors:err.errors})
  }
}
