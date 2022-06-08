module.exports = (sequelize, dataTypes) => {

    let alias = "Tipo_usuarios";
    let cols = {
        id:{
            type: dataTypes.INTEGER(10),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        }, 
        name:{ 
            type: dataTypes.STRING(500)
        }
    }

    let config = {
        tableName: "tipo_usuario",
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    } 


    const tipo_usuario = sequelize.define(alias, cols, config);

    return tipo_usuario;

    
}