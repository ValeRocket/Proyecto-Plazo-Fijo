let capital = parseInt(prompt("Ingrese el monto"))

function socialClub(){
    alert("Su capital supera los 150,000$, accedera al SocialClub del Banco")
       // let datosSocialClub = (prompt("Ingrese nombre y apellido"))
        //alert("Bienvenido al SocialClub\n" + datosSocialClub )
}

function calculoPlazoFijo(numero1,numero2,numero3){
   return numero1 * numero2 / numero3;
}

for(i=0; i <1 ;i++){
    let operacion = capital*calculoPlazoFijo(0.3, 30, 365)
    alert("La ganancia mensual de su plazo fijo es de\n" + "$" +parseInt(operacion) + "\nmensuales")
    alert("Usted ahora posee"+ "\n$" + parseInt(operacion + capital))

    
    if(operacion <150.000){
        alert("Aun no puede ingresar al social club")
    }else {
        const usuariosBanco = [];

        let datosSocialClub = prompt("Ingrese nombre y apellido")
        alert("Bienvenido al SocialClub\n" + datosSocialClub + "\npuede ver sus datos en consola" )
        usuariosBanco.push(datosSocialClub);
        console.log(usuariosBanco +"\n" +"$" +parseInt(operacion))

        console.log (usuariosBanco.some((el) => el.nombre !== "")) 

        const busqueda = usuariosBanco.find((el) => el.nombre !== "")
        console.log(busqueda)
    }
}
