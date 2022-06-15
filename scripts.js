//EJEMPLO DE TABLA DE MULTIPLICAR

let numero = parseInt(prompt("Ingrese el numero de la tabla que desea ver"))

for(let i=1; i<=10; i++){
    let resultado = i*numero
    console.log(numero + "X" + i + "=" + resultado)
}



//CODIGO QUE MUESTRA EN CONSOLA UNA LISTA DE NUMEROS PARES E IMPARES HASTA EL 100


for(let i = 1; i<=100; i++){
    if( i % 2 === 0 ){
        console.log(`El numero ${i} Es Par`)
    } else{
        console.log(`El numero ${i} Es Impar`)
    }
}
