const mongoose = require("mongoose");

const QuoteSchema = new mongoose.Schema({
  content: {
    type: String,
    minlength: [3,"El contenido de la cita es muy corto"],
    maxlength: [50, "El contenido de la cita es muy largo"],
    required: [true, "El contenido de la cita es obligatorio"]
  },
  book: {
    type: String,
    minlength: [3,"El nombre del libro es muy corto"],
    maxlength: [50, "El nombre del libro es muy largo"],
    required: [true, "El nombre del libro es obligatorio"],
  },
  quoteType: {
    type: String,
    required: [true, "El tipo de la cita es obligatorio"],
  }
}, {timestamps:true});

const Quote = mongoose.model("Quote",QuoteSchema);

module.exports = {QuoteSchema,Quote};
