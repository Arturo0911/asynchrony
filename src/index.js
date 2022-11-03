const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


/**
 * @description
 *  the states once the XMLHttpRequest
 *  we can found the information for it
 *   0 → Se ha inicializado.
 *   1 → Loading (cargando).
 *   2 → Se ha cargado.
 *   3 → Procesamiento si existe alguna descarga.
 *   4 → Completado  
*/

// https://fakeapi.platzi.com


let API = "https://api.escuelajs.co/api/v1";


function fetchData(urlApi, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function(event){
        if (xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText))
            }else{
                const  error = new Error('Error ');
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}




// function fetchData(urlApi, callback) { // función donde generamos la conexión, recibe urlApi y un callback.
//     let xhttp = new XMLHttpRequest(); // generamos una nueva instancia más corta en xhttp.
//     xhttp.open('GET', urlApi, true); // abrimos una conexión con el método GET, urlApi y true para asincronismo.
//     xhttp.onreadystatechange = function (event) { // cuando este cambio suceda, escuchamos el estado:
//         if (xhttp.readyState === 4) { // comparamos el estado que sea igual a 4 (completado).
//             if (xhttp.status === 200) { // comparamos el estatus sea igual a 200 (solicitud correcta).
//                 callback(null, JSON.parse(xhttp.responseText)); // retornamos callback null en error. Parse de datos.
//             } else { // si lo anterior no ocurre:
//                 const error = new Error('Error' + urlApi); // generamos un nuevo error + urlApi.
//                 return callback(error, null); // retornamos callback con el error y null(para los datos).
//             };
//         };
//     };
//     xhttp.send(); // Enviamos el llamado o solitud.
// };

fetchData(`${API}/products`, function(error1, data1){
    if(error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
        if(error2) return console.error(error2);
        fetchData(`${API}/categories/${data2.category.id}`, function(error3, data3){
            if(error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});