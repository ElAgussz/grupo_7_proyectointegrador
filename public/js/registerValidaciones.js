// window.addEventListener("load", function () {
    

window.onload = function () {
let nombre = document.querySelector(".camponombre")
    let email = document.querySelector(".campoemail")
    let contraseña = document.querySelector(".campocontraseña")
    let avatar = document.querySelector(".campoavatar")
    let form = document.querySelector(".formularioregistro")

    nombre.addEventListener("blur", (e) => {

        let errores = 0

        if (nombre.value == "" || nombre.value.lenght >= 2) {
            errores + 1
        }
    })

    contraseña.addEventListener("blur", (e) => {
        if (contraseña.value == "" || contraseña.value.length < 8) {
            errores + 1
        }
    })

    avatar.addEventListener("blur", (e) => {
        let extensionesPermitidas = [".jpg", ".png", "jpeg", "gif"];
        if (!extensionesPermitidas.exec(avatar.value)) {
            errores + 1
        }
    })


    email.addEventListener("blur", (e) => {
        const correoValido = (correo) => {
            cosaRara = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
            correoValidado = cosaRara.test(correo)
            if (!correoValidado || email.value == "") {
                errores + 1
            }
        }
        correoValido(email);
    })

    form.addEventListener("submit", (e) => {
        if(errores.length > 0) {
            e.preventDefault()
        }
    })

}