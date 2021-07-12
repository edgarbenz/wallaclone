"use strict";

const mongoose=  require("mongoose");

mongoose.connection.on("error", err => {
    console.log("Base de datos caida o no se puede conectar ", err);
    process.exit(1);
});

mongoose.connection.on("open", () => {
    console.log("Conectado a mongoDB en ", mongoose.connection.name);
});

mongoose.connect("mongodb://localhost/wallaclone", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

exports= mongoose.connection;

