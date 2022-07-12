/* Vamos con esas consignas:

● api/users/

○ Deberá devolver un objeto literal con la siguiente estructura:
■ count → cantidad total de usuarios en la base.
■ users → array con la colección de usuarios, cada uno con:
● id
● name
● email
● detail → URL para obtener el detalle.
--------------------------------------------------------------------

● api/users/:id

○ Deberá devolver un objeto literal con la siguiente estructura:
■ Una propiedad por cada campo en base.
■ Una URL para la imagen de perfil (para mostrar la imagen).
■ Sin información sensible (ej: password y categoría).*/


const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


const usersAPIController = {
    list: (req, res) => {
        db.users
        .findAll()
        .then(users => {
            return res.json({
                count: users.length,

                data: users,
                status: 200
            })
        })
    }
}

module.exports = usersAPIController;