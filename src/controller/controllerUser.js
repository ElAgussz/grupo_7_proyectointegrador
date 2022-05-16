const path = require ("path")
const fs = require('fs');
const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator')


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controlador = {

   
    register: (req, res) => {
        res.render ("register.ejs")
    },

	processRegister:(req, res) => {
		const resultValidation = validationResult(req);

		if(resultValidation.errors.length > 0) {
			return res.render("register.ejs", {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

		let userInDB = User.findByField('email', req.body.email);

		if(userInDB) {
			return res.render('register.ejs', {
				error: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			})
		}
	

		let userToCreate = {
			...req.body,
			password: bcryptjs.hashSync(req.body.password, 10),
			avatar: req.file.filename
		}

		User.create(userToCreate);
		
		return res.send("funciono bien")
	},

    registerConfirmation: (req, res) => {
        res.render ("registro-confirmacion.ejs")
    },

	login: (req, res) => {
        res.render ("login.ejs")
    },
    loginProcess: (req, res) => {
		let userToLogin = User.findByField('email', req.body.email);
		
		if(userToLogin) {
			let OkPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
			if (OkPassword) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;

				if(req.body.mantenerSesion) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
				}

				return res.redirect('/index');
			} 
			return res.render('/login', {
				errors: {
					email: {
						msg: 'Las credenciales son inválidas'
					}
				}
			});
		}

		return res.render('/login', {
			errors: {
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				}
			}
		});
	},


    logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/index');
	}

}


module.exports = controlador;