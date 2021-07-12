var express = require('express');
//const { route } = require('..');
var router = express.Router();
const Usuario = require("../../models/Usuario");

//http://localhost:3100/api/usuarios/registro
router.post("/registro", async(req, res, next) => {
    try {
      const usuarioData = req.body;
      const {username, email, password} = req.body;
      const yaExiste = await Usuario.existe(username, email);

      if (yaExiste) {
        return res.json({error: "Usuario ya existe en la base de datos"});
      }

      const usuario = new Usuario(usuarioData);
      const usuarioCreado = await usuario.save();
  
      res.json({usuarioCreado});
    } catch (error) {
      next(error);
    }
  })

  //http://localhost:3100/api/usuarios/login
router.post("/login", async(req, res, next) => {
    try {
      const usuarioData = req.body;
      const {username, email, password} = req.body;
      const autenticado = await Usuario.autenticado(username, email);

      if (autenticado) {
        res.json({resultado: "Usuario autenticado satisfactoriamente"});
      } else {
        return res.json({error: "Usuario NO existe en nuestra base de datos"});
      }
  
    } catch (error) {
      next(error);
    }
  })


module.exports = router;