module.exports = (sequelize, dataTypes) => {

    let alias = "Generos";
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
        tableName: "genres",
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    } 


    const genres = sequelize.define(alias, cols, config);

    return genres;

    
}