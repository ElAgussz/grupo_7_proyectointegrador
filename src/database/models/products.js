module.exports = (sequelize, dataTypes) => {

    let alias = "products";
    let cols = {
        id:{
            type: dataTypes.INTEGER(10),
            primaryKey: true,
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
        },
        category_id:{
            type: dataTypes.INTEGER(10),          
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
        } 
    }

    let config = {
        tableName: "products",
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    } 


    const products = sequelize.define(alias, cols, config);

    /*products.associate = (models) => {
        products.belongsTo(models.genres, { 
            as: "genero",
            foreignKey: "genre_id"
        })

        products.belongsTo(models.category, { 
            as: "categoria",
            foreignKey: "category_id"
        })

        products.hasMany(models.users, { 
            as: "productos_user",
            foreignKey: "user_id"
        })
    }*/

    return products;

    
}