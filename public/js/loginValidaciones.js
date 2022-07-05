
    let form = document.querySelector("form.loginForm");
    

    form.addEventListener("submit" , (e) => {
        
        let errors = [];

        let email = document.querySelector("input.email")
            if (email.value == "") {
                errors.push('El campo email no puede estar vacío')
            }
        
        let password = document.querySelector("input.password")
            if (password.value == "") {
                errors.push('El campo contraseña no puede estar vacío')
            }
        if (errors.length > 0) {
            e.preventDefault();
            
            let ulErrores = document.querySelector("div.errores ul")
            errors.forEach(error => {
                ulErrores.innerHTML += `<li>${error}<li>`   
            });
        } else {
            res.redirect ('/')
        }
    }) 