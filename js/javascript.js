let request = document.getElementById("button3")
request.addEventListener("click", newRequest);

let requests = [];

function newRequest(){
    let data1 = document.getElementById("name");
    let data2 = document.getElementById("email");
    let data3 = document.getElementById("phone");

    let newUser = {nombre: data1.value, email: data2.value, phone: data3.value};
    requests.push(newUser);
    console.log(requests);
    let requestsJSON = JSON.stringify(requests);
    localStorage.setItem("Nuevas solicitudes", requestsJSON);
    
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: '¡Gracias, ' + data1.value + '!',
        text: 'En breve nos pondremos en contacto contigo',
        showConfirmButton: false,
        timer: 2000
      })
}

/* function saludar(){
    console.log("Hola");
}

saludar();

setTimeout(saludar, 5000);
 */
/* let p = new Promise(function(resolve, reject)){
    let sumas = 2 + 6;

} */

// Se puede configurar de esta forma:
/* setTimeout(() => {
    console.log("Waited 1 second");
}, 1000); */
// O de esta forma:
/* function prueba(){
    console.log("Esperó 3 segundos");
}
setTimeout(prueba, 2000);
 */
/* 
var send = function() {
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : 'omarsilva@politicas.unam.mx',
    Password : '3B5A7D58E4A72311D098E332B4CD621710D7',
    From : 'ohshootstudio@gmail.com',
    To : 'omarsilva@politicas.unam.mx',
    Subject : 'Nuevo usuario solicita informes',
    Body : "Ay mi mente"
}).then(
  message => alert(message)
);
};


send(); */
/* fetch('https://favqs.com/api/qotd')
  .then(response => response.json())
  .then(data => console.log(data));
 */

  let mood = document.getElementById("mood");


function mostrar_posicion(position){
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    console.log(lat);
    console.log(long); 
    let key = `cd93ab5111f4f3bc1f8e108732b1e1d2`;

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric&lang=es`)
        .then(response => response.json())
        .then(data => { 
            console.log(data.weather[0].main)
            if(data.weather[0].main == "Clouds"){
                mood.textContent = "Segun nuestros registros, hoy está nublado. Sabes que eso no ayuda a muestro estado de ánimo"
            }
            else if (data.weather[0].main == "Rain"){
                mood.textContent = "Parece que hoy será un día lluvioso. Esto puede afectar nuestros neuroreceptores y puede hacernos sentir tristes"
            }
        })

        .catch(error => console.log("Tiempo no encontrado"));
    }



navigator.geolocation.getCurrentPosition(mostrar_posicion);

