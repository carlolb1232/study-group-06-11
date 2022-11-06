const mongoose = require("mongoose");

const AutoreSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:[true,"El nombre es obligatorio (back)"],
        minlength: [3,"El nombre es muy corto"],
        maxlength: [50, "El nombre es muy largo"],
    },
    genero:{
        type:String,
        required:[true,"El género literario es obligatorio (back)"],
        minlength: [3,"El género literarioes muy corto"],
        maxlength: [50, "El género literario es muy largo"],
    },
    quotes:[{type:mongoose.Schema.Types.ObjectId,ref:"Quote"}]
},
{timestamps:true})

const Autore = mongoose.model("Autore",AutoreSchema);

module.exports = Autore;