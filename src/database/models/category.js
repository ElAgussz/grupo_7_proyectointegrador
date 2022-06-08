module.exports = (sequelize, dataTypes) => {

    let alias = "Categorias";
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
        tableName: "category",
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    } 


    const category = sequelize.define(alias, cols, config);

    products.associate = (models) => {
        products.hasMany(models.category, { 
            as: "categoria",
            foreignKey: "category_id"
        })
    }

    return category;

    
}