const Autore = require("../models/autores.model");
const { Quote } = require("../models/quote.model");


module.exports.createQuote = async (req, res) =>{
  try{
    const { content, author, quoteType, rating, idAutore} = req.body;
    const quote = await Quote.create({content, book, quoteType, rating});
    const autore = await Autore.findById(idAutore).exec();
    const autoresWithQuotes = await Autore.findById(idAutore).populate("quotes").exec();
    let totalReviews = autoresWithQuotes.quotes.length + 1;
    let sumQuotes = autoresWithQuotes.quotes.reduce((acumulado, elemento)=>acumulado+=Number(elemento.rating), 0) + Number(rating);
    let avg = sumQuotes/totalReviews;
    const updateQuotesAverage = await Autore.findByIdAndUpdate({_id:idAutore}, {average:avg}, {new:true})
    autore.quotes.push(quote)
    await autore.save();
    updateQuotesAverage.save()
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
