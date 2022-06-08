module.exports = (sequelize, dataTypes) => {

    let alias = "Paises";
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
        tableName: "paises",
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    } 


    const paises = sequelize.define(alias, cols, config);

    return paises;

    
}