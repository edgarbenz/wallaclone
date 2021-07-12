# wallaclone

# para Registrar usuarios:
localhost:3100/api/usuarios/registro

# para hacer login:
localhost:3100/api/usuarios/login

# Validaciones para el registro de usuarios (hasta hoy 12Julio2021): 
Si haces registro de un usuario existente el api te contestará:
{
    "error": "Usuario ya existe en la base de datos"
}

Si hacer registro de un usuario que no existe, te muestra un JSON con el usuario registrado:
{
    "usuarioCreado": {
        "_id": "60ebd791fa6d934078141d6f",
        "username": "edgarbenz23",
        "email": "edgarbenz23@hotmail.com",
        "password": "12345678",
        "__v": 0
    }
}

# Validaciones para hacer login (hasta hoy 12Julio2021): 
Si haces un login de un usuario que si existe en la Base de datos el api te contesta:
{
    "resultado": "Usuario autenticado satisfactoriamente"
}

Si haces login con un email o contraseña que no existen en la base de datos el api te contesta:
{
    "error": "Usuario NO existe en nuestra base de datos"
}