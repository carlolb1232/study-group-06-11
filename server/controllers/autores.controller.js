const Autore = require ("../models/autores.model")
const { Quote } = require("../models/quote.model")

module.exports.findAll = (req,res) => {
  Autore.find()
    .then((all)=>res.json({autores:all}))
    .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}


module.exports.createAutore = async(req,res)=>{
    try{
        const {nombre, genero, content, book, quoteType } = req.body;
        const quote = new Quote({content, book, quoteType});
        const autore = new Autore({nombre,genero});
        autore.quotes.push(quote);
        await autore.save();
        await quote.save();
        res.json({message:"",autore:autore,quote:quote})
    }
    catch(err){
        res.json({message:"Algo salio mal",errors:err.errors})
    }
}

module.exports.findOne = (req,res) => {
  Autore.findOne({_id: req.params.id})
    .then((autor)=>res.json({autores:autor}))
    .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.update = (req,res) => {
  Autore.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
      .then((autore)=>res.json({message: "", autore:autore}))
      .catch((err)=>res.json({message:"Algo salio mal",error:err.errors}))
}

module.exports.delete = (req,res) => {
  Autore.deleteOne({_id: req.params.id})
      .then((result)=>res.json({resultado:result}))
      .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}
