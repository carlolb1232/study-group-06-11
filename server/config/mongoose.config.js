const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/matchAutores_bd", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Nos conectamos a la database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

