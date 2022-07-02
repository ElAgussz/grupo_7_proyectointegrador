const { hyphenToCamel } = require("ejs/lib/utils")

window.addEventListener("load", function () {

    let form = document.querySelector("form.formularioregistro")

    form.addEventListener("submit", (e) => {

        let errors = []

        let nombre = document.querySelector("input.camponombre")

        if (nombre.value == "") {
            errors.push("Este campo es obligatorio")
        } else if (nombre.value.length < 2) {
            errors.push("Este campo debe tener más de 2 caracteres")
        }


        let contraseña = document.querySelector("input.campocontraseña")

        if (contraseña.value == "") {
            errors.push("Este campo es obligatorio")
        } else if (contraseña.value.length < 8) {
            errors.push("Este campo debe tener como mínimo 8 caracteres.")
        }



        let email = document.querySelector("input.campoemail").value

        correoValido(email)

        const correoValido = (correo) => {
            cosaRara = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
            correoValidado = cosaRara.test(correo)
            if (!correoValidado) {
                errors.push("El correo electrónico no es válido")
            } else if (correo == "") {
                errors.push("El correo electrónico es obligatorio")
            }
        }

        let avatar = document.querySelector("input.campoavatar")
        let extensionesPermitidas = [".jpg", ".png", "jpeg", "gif"];
        if (!extensionesPermitidas.exec(avatar.value)) {
            errors.push("Las extensiones permitidas son .jpg, .png, jpeg y gif");
            avatar.value = "";
        }

        if (errors.length > 0) {
            e.preventDefault();
            errors.forEach(error => {
                ulErrores.innerHTML += `<li>${error}<li>`
            });
        }
    })
})


