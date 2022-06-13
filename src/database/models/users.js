module.exports = (sequelize, dataTypes) => {

    let alias = "Usuarios";
    let cols = {
        id:{
            type: dataTypes.INTEGER(10),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        }, 
        name:{ 
            type: dataTypes.STRING(500),
            allowNull: false
        },
        apellido:{
            type: dataTypes.STRING(500),
            allowNull: false
        },
        password:{
            type: dataTypes.STRING(500),
            allowNull: false
        },
        email:{
            type: dataTypes.STRING(500),
            allowNull: false
        },
        telefono:{
            type: dataTypes.MEDIUMINT(12),
            allowNull: false
        },
        tipo_usuario_id:{
            type: dataTypes.INTEGER(10),
            allowNull: false
        },
        cumpleaños:{
            type: dataTypes.DATE,
            allowNull: false
        },
        pais_id:{
            type: dataTypes.STRING(500),
            allowNull: false
        },
        ciudad:{
            type: dataTypes.STRING(500),
            allowNull: false
        }
    }

    let config = {
        tableName: "users",
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    } 


    const users = sequelize.define(alias, cols, config);

    return users;

    
}