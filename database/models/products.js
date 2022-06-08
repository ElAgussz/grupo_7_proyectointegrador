module.exports = (sequelize, dataTypes) => {

    let alias = "Productos";
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
        price:{
            type: dataTypes.INTEGER(10),
            allowNull: false
        },
        discount:{
            type: dataTypes.INTEGER(10),
            allowNull: false
        },
        genre_id:{
            type: dataTypes.INTEGER(10),
            allowNull: false
        },
        category_id:{
            type: dataTypes.INTEGER(10),
            allowNull: false
        },
        description:{
            type: dataTypes.INTEGER(10),
            allowNull: false
        },
        stock:{
            type: dataTypes.INTEGER(10),
            allowNull: false
        },
        user_id:{
            type: dataTypes.INTEGER(10),
            allowNull: false
        } 
    }

    let config = {
        tableName: "products",
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    } 


    const products = sequelize.define(alias, cols, config);

    return products;

    
}