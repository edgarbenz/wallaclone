"use strict";

const mongoose = require("mongoose");

const usuarioSchema = mongoose.Schema({
    username: { type: String, index:true },
    email: { type: String, index:true },
    password: String
})

usuarioSchema.statics.existe = function(username, email) {
  const query = Usuario.findOne({$or:[{"username": username},{"email": email}]});  
console.log("username: ", username, "email", email)
console.log("query: ",query)
    return query.exec(); 
}

usuarioSchema.statics.autenticado = function(username, email) {
  const query = Usuario.findOne({"username": username,"email": email});  
  console.log("username: ", username, "email", email)
  console.log("query: ",query)
      return query.exec(); 
}
//genteSchema.statics.lista = function(filtro, limite, skip, fields,sort) {
//  const query = Agente.find(filtro).limit(limite).skip(skip).select(fields).sort(sort);  // recuerda que .find devuelve un objeto no una promesa, pero el objeto es thenable
//
//    return query.exec(); // .exec devuelve una promesa, o fuerza a enviar una promesa no el objeto thenable
//}

//agenteSchema.methods.multar = function() {
//    this.multado= true;
//    return this.save();
//}

const Usuario = mongoose.model("Usuario", usuarioSchema);


module.exports = Usuario; 