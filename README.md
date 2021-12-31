#Project Name: Wallaclone API

#This project is did in Node.JS

# This project consist in a API with Register and Login of users:
        username": string,
        email: string,
        password: string
        
#If you try to register an existent user , the API answer you:
    "error": "Usuario ya existe en la base de datos"

#If you register an user that don't exist, it show you a JSON with the user register successfully:
    "usuarioCreado": {
        "_id": "60ebd791fa6d934078141d6f",
        "username": "edgarbenz23",
        "email": "edgarbenz23@hotmail.com",
        "password": "12345678",
        "__v": 0
    }

#If you do a login of a existent user on Data Base, the API answer you:
{
    "resultado": "Usuario autenticado satisfactoriamente"
}

#If you doing a login with a email or password that don't exist in the Data Base, the API answer you:
{
    "error": "Usuario NO existe en nuestra base de datos"
}
