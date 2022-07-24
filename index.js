
function valorationAlert () {
    var valoration = document.getElementById('valorationRange').value;
    window.alert("Has valorado con " + valoration + " puntos.");
}
function mostrarCuenta () {
    var paisValue = document.getElementById('pais').value;
    var controlValue = document.getElementById('iban').value;
    var entidadValue = document.getElementById('entidad').value;
    var sucursalValue = document.getElementById('sucursal').value;
    var dcValue = document.getElementById('dc').value;
    var cuentaValue = document.getElementById('cuenta').value;
    var controlStr = String(controlValue);
    var entidadStr = String(entidadValue);
    var sucursalStr = String(sucursalValue);
    var dcStr = String(dcValue);
    var cuentaStr = String(cuentaValue);
    if (controlValue >= 1 && entidadValue >= 1 && sucursalValue >= 1 && dcValue >= 1 && cuentaValue >= 1) {
    var account = paisValue + controlStr + '-' + entidadStr + '-' + sucursalStr + '-' + dcStr + '-' + cuentaStr;
    window.alert("Le informamos que su cuenta bancaria es: " + account);
    }
    else {
        window.alert("¡Complete todos los campos de la cuenta bancaria correctamente!");
    }
}
function showFecha () {
    const fechaComoCadena = document.getElementById('fecha').value; //Todo esto es un objeto getDay() que se usa para obtener
    const numeroDia = new Date(fechaComoCadena).getDay(); // el numero del día de la semana de domingo (0) a sabado (6). 
    let arrayDia = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado']; // el array para darle nombre a los dias
    var diaDeSemana = arrayDia[numeroDia];
    window.alert("La fecha seleccionada en el elemento de fecha es un " + diaDeSemana + ".");
}
function validacionPostal () {
    var provinciasMayus = ['vacio', 'Alava', 'Albacete', 'Alicante', 'Almeria', 'Avila', 'Badajoz', 'Islas Baleares', 'Barcelona', 'Burgos', 'Caceres', 'Cadiz', 'Castellon', 'Ciudad Real', 'Cordoba', 'La Coruna', 'Cuenca', 'Gerona', 'Granada', 'Guadalajara', 'Guipuzcoa', 'Huelva', 'Huesca', 'Jaen', 'Leon', 'Lerida', 'La Rioja', 'Lugo', 'Madrid', 'Malaga', 'Murcia', 'Navarra', 'Orense', 'Asturias', 'Palencia', 'Las Palmas', 'Pontevedra', 'Salamanca', 'Santa Cruz de Tenerife', 'Cantabria', 'Segovia', 'Sevilla', 'Soria', 'Tarragona', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza', 'Ceuta', 'Melilla'];
    var provinciasMinus = ['vacio', 'alava', 'albacete', 'alicante', 'almeria', 'avila', 'badajoz', 'islas baleares', 'barcelona', 'burgos', 'caceres', 'cadiz', 'castellon', 'ciudad real', 'cordoba', 'la coruna', 'cuenca', 'gerona', 'granada', 'guadalajara', 'guipuzcoa', 'huelva', 'huesca', 'jaen', 'leon', 'lerida', 'la rioja', 'lugo', 'madrid', 'malaga', 'murcia', 'navarra', 'orense', 'asturias', 'palencia', 'las palmas', 'pontevedra', 'salamanca', 'santa cruz de tenerife', 'cantabria', 'segovia', 'sevilla', 'soria', 'tarragona', 'teruel', 'toledo', 'valencia', 'valladolid', 'vizcaya', 'zamora', 'zaragoza', 'ceuta', 'melilla'];
    let codigoPos = document.getElementById('cp').value;
    let ProvinciaNombre = document.getElementById('provincia').value;
    var codigoPosArray = codigoPos.split('');
    var codigoPos2num = codigoPosArray[0] + codigoPosArray[1];
    let codigoPosNombreMayus = provinciasMayus[codigoPos2num];
    let codigoPosNombreMinus = provinciasMinus[codigoPos2num];
    if (codigoPosNombreMayus == ProvinciaNombre || codigoPosNombreMinus == ProvinciaNombre) {
        console.log('correcto');
        swal("Validación Correcta", "El código postal y la provincia introducida coinciden correctamente.", "success");
    }
    else if (codigoPos == "" || ProvinciaNombre == "") {
        console.log('Casillas Vacias');
        swal("Validación Errónea", "Existen espacios en blanco, vuelva a introducir los datos correctamente.", "error");
        cp.value = "";
        provincia.value = "";
    }
    else if (codigoPos >= 'a' && codigoPos <= 'z') {
        console.log('solo numeros');
        swal("Validación Errónea", "Sólo se admiten caracteres numéricos en el campo del código postal.", "error");
        cp.value = "";
        provincia.value = "";
    }
    else {
        console.log('Los datos introducidos son incorrectos')
        swal("Validación Errónea", "Los datos introducidos no son correctos, verifique y vuelva a introducirlos nuevamente.", "error");
        cp.value = "";
        provincia.value = "";
    }

}