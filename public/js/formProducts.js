
    let form = document.querySelector("form.form-products");
    

    form.addEventListener("submit" , (e) => {

    
    
        const valoresAceptados = /^[0-9]+$/;
        let errores = [];

        let nombre = document.querySelector("input.nombre");
        
        if(nombre.value === "" ){
            errores.push("El campo nombre tiene que estar completo")
        } else if (nombre.value.length <5){
            errores.push("El campo nombre debe tener al menos 5 caracteres")
        }
         
        let descripcion = document.querySelector("#descripcion");
        
        if(descripcion.value == ""){
            errores.push("El campo descripcion no puede estar vacio")
        } else if(descripcion.value.length <20){
            errores.push("El campo descripcion debe contener al menos 20 caracteres")
        }

        let stock = document.querySelector("input.stock");
        
        if(stock.value == ""){
            errores.push("El campo no puede estar vacio")
        } else if(isNaN(stock.value)){
            errores.push("Debe ingresar un valor numerico en stock")
        }

        let precio = document.querySelector("input.precio");

        if(precio.value == ""){
            errores.push("Debe ingresar un precio valido")
        }else if(isNaN(precio.value)){
            errores.push("Debe ingresar un valor numerico en precio")
        }
        

        let descuento = document.querySelector("input.descuento");

        if(descuento.value == ""){
            errores.push("Debe ingresar un porcentaje valido")
        }else if(isNaN(stock.value)){
            errores.push("Debe ingresar un valor numerico en descuento")
        }

        let genero = document.querySelector(".genero");

        if( genero.selectedIndex == null || genero.selectedIndex == 0 ){
            errores.push("Debe seleccionar una genero")
        }
        let categoria = document.querySelector(".categoria");

        if( categoria.selectedIndex == null || categoria.selectedIndex == 0 ){
            errores.push("Debe seleccionar una categoria")
        }
        
        // capturando errores //

        if(errores.length >0 ){
            e.preventDefault();

            let ulErrores = document.querySelector("div.errores ul")
            errores.forEach(error => {
                ulErrores.innerHTML += `<li>${error}<li>`   
            });
            
            }else {
                alert("Producto creado")
            }        
    })
    