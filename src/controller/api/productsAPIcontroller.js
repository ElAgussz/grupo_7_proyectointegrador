const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const { error } = require('console');
//const products = require('../../database/models/products');



const productsAPIController = {
    
    'list': (req, res) => {
        db.products.findAll()
        .then(products => {
            return res.json({
                count: products.length,
               /* countByCategory: products.category.length,*/
                data: products,
                status: 200 
            }) 
        })
        .catch(error => console.log(error))
    },
    'detail': (req, res) => {
        
        db.products.findByPk(req.params.id,)
            .then(product => {
                return res.json({
                    count: product.length,
                    data: product,
                    status: 200
                })
            })
        .catch(error => console.log(error))
    },
    }


module.exports = productsAPIController;