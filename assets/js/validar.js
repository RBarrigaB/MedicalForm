function validar() {
    var rut_input;
    var nombre;
    var apellidos;
    var edad;
    var correo;
    var especialidad;
    var fecha;
    var hora;
    var check;
    rut_input = document.getElementById("rut").value;
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    edad = document.getElementById("edad").value;
    correo = document.getElementById("correo").value;
    fecha = document.getElementById("fecha").value;
    especialidad = document.getElementById("especialidad").value;
    hora = document.getElementById("hora").value;

    verificar_rut(rut_input);
    verificar_nombre(nombre);
    verificar_apellidos(apellidos);
    validar_edad(edad);
    validar_correo(correo);
    validar_fecha(fecha);

    if(check === true){
        
    alert("Estimado(a) " + nombre +" "+ apellidos + " su hora para " + especialidad + " ha sido reservada con éxito para el día " + fecha + " a las " + hora + " hrs."+
    ". Además, se le envió un mensaje a su correo " + correo + " con el detalle de su cita. \n\n Gracias por preferirnos.");
} 

// Se verifica si el rut tiene un formato correcto, esto funciona para rut que tengan 9 o 10 dígitos
    function verificar_rut(rut) {
        try {

            if (rut.length === 12) {
                if (rut[2].match(/\.$/g) && rut[6].match(/\.$/g) && rut[10].match(/-/g) && rut[11].match(/[0-9] || kK/g)) {
                    check=true;
                }

            } else if (rut.length === 11) {
                if (rut[1].match(/\.$/) && rut[5].match(/\.$/) && rut[9].match(/-/)) {
                    check=true;
                }
                else if (rut.length <= 11 && rut[2].match(/\.$/g) && rut.match(/^(?!.*-)/g)) {

                    alert("Por favor, ingrese guión antes del dígito verificador");
                }
                else if ((rut.length <= 11) && rut[2].match(/\.$/g)) {

                    alert("RUN (Formato: con puntos y guión. Ejemplo: 12.345.678-9)");
                }
            }
            else if (rut.length === 10) {

                if (rut.length <= 10 && rut[1].match(/\.$/g)) {
                    alert("RUN (Formato: con puntos y guión. Ejemplo: 1.234.567-8)");
                }
                else if (rut.length <= 10 && rut[1].match(/\.$/g) && rut.match(/^(?!.*-)/g)) {
                    alert("Por favor, ingrese guión antes del dígito verificador");
                }
            }
            else if (rut === "") {
                alert("Debe ingresar un rut");
            }

            else {
                alert("Rut inválido. Inténtelo nuevamente");
            }
        }
        catch (ex) {

        }
    }
// Se verifica que el se ingrese un nombre sin caracteres especiales o números, solamente letras
    function verificar_nombre(name) {

        if (name.match(/[a-zA-Z]/g) && name.match(/[&#,+-/()$~%.'":*;?<>{}|°¬!=¿¡´¨_]/g)) {

            alert("Por favor. Ingrese su nombre sin caracteres especiales");
        }
        else if (name.match(/[a-zA-Z]/g) && name.match(/\d/)) {
            alert("Por favor. Ingrese su nombre sin números");
        }
        else if (name.match(/[&#,+-/()$~%.'":*;?<>{}|°¬!=¿¡´¨_]/g)) {
            alert("Por favor. Ingrese su nombre, no caracteres");
        }
        else if (name.match(/\d/)) {
            alert("Por favor. Ingrese su nombre, no números");
        }
        else if (name === "") {
            alert("Debe ingresar un nombre");
        }
        else {
            check=true;
        }
    }
// Se verifica que el se ingrese un apellido sin caracteres especiales o números, solamente letras
    function verificar_apellidos(lastname) {

        if (lastname.match(/[a-zA-Z]/g) && lastname.match(/[&#,+-/()$~%.'":*;?<>{}|°¬!=¿¡´¨_]/g)) {

            alert("Por favor. Ingrese su apellido sin caracteres especiales");
        }
        else if (lastname.match(/[a-zA-Z]/g) && lastname.match(/\d/)) {
            alert("Por favor. Ingrese su apellido sin números")
        }
        else if (lastname.match(/[&#,+-/()$~%.'":*;?<>{}|°¬!=¿¡´¨_]/g)) {
            alert("Por favor. Ingrese su apellido, no caracteres");
        }
        else if (lastname.match(/\d/)) {
            alert("Por favor. Ingrese su apellido, no números");
        }
        else if (lastname === "") {
            alert("Debe ingresar un apellido");
        }
        else {
            check=true;
        }
    }
// Se verifica que la edad sea válida, evaluando que sea menor a 150 años
    function validar_edad(age) {

        if (age.match(/\d/g) && age < 150) {
            check=true;
        }
        else if (age.match(/\d/g) && age > 150) {
            alert("Debe ingresar una edad válida");
        }
        else {
            alert("Debe ingresar una edad");
        }

    }
// Se verifica que el se ingrese un correo con un formato válido
    function validar_correo(correo) {

        if (correo === "") {
            alert("Debe ingresar un correo");
        }
        else if (correo.length > 50) {
            alert("El correo es demasiado largo");
        }

        if (!correo.includes("@") && correo.includes(".")) {

            alert("Correo inválido. Ingrese un @ en la dirección de correo");
        }

        if (!correo.includes(".") && correo.includes("@")) {
            alert(" El correo " + correo + " es inválido." + "El correo debe llevar punto");
        }
        if(correo.includes("@") && correo.includes(".")){
            check=false;
        }
    }
// Se verifica que el se ingrese un año de nacimiento correcto en formato dd/mm/yyyy
    function validar_fecha(date) {

        var partes_fecha = date.split("/");
        var dia = parseInt(partes_fecha[0], 10);
        var mes = parseInt(partes_fecha[1], 10);
        var year = parseInt(partes_fecha[2], 10);

        if (date[2] === "/" && date[5] === "/") {

            if (dia >= 1 && dia <= 31) {
                if (mes >= 1 && mes <= 12) {
                    if (year >= 1900 && year <= 2020) {
                        check=true;
                    }
                    else {
                        alert("El año de nacimiento " + year + " no es correcto. Inténtelo nuevamente");
                    }

                }
                else {
                    alert("El mes " + mes + " no es correcto. Inténtelo nuevamente");
                }
            }
            else {
                alert("El día del mes " + dia + " no es correcto. Inténtelo nuevamente");
            }

        }
        else {
            alert("Por favor. Ingrese la fecha en formato (01/01/2020)");
        }
    }

}
