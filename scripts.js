// Funcion que calcula los valores numericos
function plazoFijo(numero1, numero2, numero3) { 
  return numero1 * numero2 / numero3;
}


//Clase constructora del Usuario
class Usuario {
  constructor(nombre, apellido, capital) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.capital = capital;
  }
}

//Generando el evento de calculadora de plazo fijo
let botonCalcular = document.querySelector("#botonCalcular"); //Llamando a los inputs
botonCalcular.addEventListener("click", () => { 
let capital = parseFloat(document.querySelector("#capital").value)
let resultado = capital * plazoFijo(0.3, 30, 365);
let nombre = document.querySelector("#nombre").value;
let apellido = document.querySelector("#apellido").value;

document.querySelector("#resultado").value = parseInt(resultado); //Mostrando los valores de los inputs
document.querySelector("#resultNombre").value = nombre;
document.querySelector("#resultApellido").value = apellido;
let vip = document.querySelector("#resultadoTotal").value = parseInt(capital + resultado);

// Generando la seccion "VIP" del proyecto
  if (vip > 100000) { 
    let zonaVip = document.getElementById("zonaVip"); //Creando el boton para los Usuarios VIP
    zonaVip.innerHTML = "<h2 class =h2vip >Su capital supera los $100.000, puede acceder al SocialClub</h2> <button id=botonVip class=button>INGRESAR</button>"

    let sociosVip = []
    new Usuario()

    let botonVip = document.querySelector("#botonVip");
    botonVip.addEventListener("click", () => {
      const usuario1 = new Usuario(nombre, apellido, vip);

//Sweet Alert
swal({
  title: "Bienvenido al SocialClub!",
  text: "Vea sus datos en la tabla de abajo!",
  icon: "success",
  button: "ACEPTAR",
      });

    sociosVip.push(usuario1)
    console.log(sociosVip)
   
//JSON
const almacenamiento = (nombre, apellido, capital) => { localStorage.setItem(nombre, apellido, capital) }
almacenamiento("listaUsuarios", JSON.stringify(usuario1))
JSON.stringify(localStorage.getItem(usuario1))

//Creando la tabla VIP
function inicializarElementos(){
  tabla = document.getElementById("tablaVip") //Llamando a los inputs
  nombre = document.querySelector("#nombre").value;
  apellido = document.querySelector("#apellido").value;
  capital = parseFloat(document.querySelector("#capital").value)
}

//Funcion para limpiar la tabla
function limpiarTabla(){
  while(tablaVip.rows.length> 1){
    tablaVip.deleteRow(1)
  }
}
limpiarTabla()

//Funcion para agregar los usuarios a la tabla
function agregarUsuariosTabla(){
sociosVip.forEach((Usuario) =>{
  let filatabla = document.createElement("tr"); //Agregando los datos del usuario a la tabla
  filatabla.innerHTML = ` 
  <td class=color>${Usuario.nombre}</td>
  <td class=color>${Usuario.apellido}</td>
  <td class=color>${Usuario.capital}</td>`;
  tabla.tBodies[0].append(filatabla)
})
}

function main() {
  inicializarElementos();
  agregarUsuariosTabla();
}

//INICIO DE CICLO
main()

      } //Cierre Evento VIP
     )//Cierre evento vip

    } //Cierre if 
  } //Cierre Evento Principal
) //Cierre boton calcular principal

//API de noticias 
/*let apinews = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2022-08-15&' +
          'sortBy=popularity&' +
          'apiKey=fd31390d08db45c1a56ac22b49fbb3b5';

          let req = new Request(apinews);
          fetch(req)
              .then(function(response) {
                  console.log(response.json());
              })

function getnews(){
  fetch('https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&apikey=fd31390d08db45c1a56ac22b49fbb3b5',{headers:new Headers({"X-Requested-With":"A"})})
  .then(a=> a.json())
  .then(response=>{
    for(var i=0; i<response.articles.length; i++){
      document.getElementById("output").innerHTML +="<div style='padding-top: 20px;'><img style='float:left; width 150px;'src="+response.articles[i].urlToImage+"'><h1>"+response.articles[i].urlToImage+"'><h1>"+response.articles[i].title+"</h1>"+response.articles[i].source.name+"<br>"+response.articles[i].description+"<a href="+response.articles[i].url+"'target='_blank'>"+response.articles[i].url+"</a></div>"
    }
  })
}
*/

