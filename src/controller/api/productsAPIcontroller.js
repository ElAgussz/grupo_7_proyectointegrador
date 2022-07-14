const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const products = require('../../database/models/products');



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
    }/*,
    'detail': (req, res) => {
        
        db.products.findByPk(req.params.id,)
            .then(user => {
                return res.json({
                    count: .length,
                    data: user,
                    status: 200
                })
            })
    }*/
}

module.exports = productsAPIController;