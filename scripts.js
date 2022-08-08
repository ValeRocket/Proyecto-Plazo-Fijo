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
let botonCalcular = document.querySelector("#botonCalcular");
botonCalcular.addEventListener("click", () => { 
  let capital = parseFloat(document.querySelector("#capital").value)
  let resultado = capital * plazoFijo(0.3, 30, 365);
  let nombre = document.querySelector("#nombre").value;
  let apellido = document.querySelector("#apellido").value;

  document.querySelector("#resultado").value = parseInt(resultado);
  document.querySelector("#resultNombre").value = nombre;
  document.querySelector("#resultApellido").value = apellido;
  let vip = document.querySelector("#resultadoTotal").value = parseInt(capital + resultado);

// Generando la seccion "VIP" del proyecto
  if (vip > 100000) { 
    let zonaVip = document.getElementById("zonaVip");
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
        sociosVip.push(Usuario)
        console.log(usuario1)


/*------------------------------------------------------------------------------ */
        function inicializarElementos(){
          tabla = document.getElementById("tabla-productos")
        }


        let entry = document.getElementById("botonVip");
        entry.addEventListener("click", registro);
        function registro(e){
          e.preventDefault()

          let nombreFinal = document.querySelector("#resultNombre").value = nombre;
          let apellidoFinal = document.querySelector("#resultApellido").value = apellido;
          let totalTotal = document.querySelector("#resultadoTotal").value = parseInt(capital + resultado);
        

        let usuarioARegistrar = new Usuario(
          nombreFinal,
          apellidoFinal,
          totalTotal,
      );

      sociosVip.push(usuarioARegistrar)


      function agregarProductosTabla(){
        sociosVip.forEach((Usuario) =>{
          let filatabla = document.createElement("tr");
          filatabla.innerHTML = `
          <td>${Usuario.nombre}</td>
          <td>${Usuario.apellido}</td>
          <td>${Usuario.capital}</td>`;
        })
      }

      agregarProductosTabla();
      inicializarElementos();
    }
//----------------------------------------------------------------------------------------    
   
    
//JSON
        const almacenamiento = (nombre, apellido, capital) => { localStorage.setItem(nombre, apellido, capital) }
        almacenamiento("listaUsuarios", JSON.stringify(usuario1))

        JSON.stringify(localStorage.getItem(usuario1))
      } //Cierre Evento VIP
     )//Cierre evento vip

    } //Cierre if 
  } //Cierre Evento Principal
) //Cierre boton calcular principal

let urlApi = 'https://jsonplaceholder.typicode.com/users'
fetch(urlApi)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

