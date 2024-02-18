/* Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario un número por prompt o por input y guardarlo.
Debe calcular el factorial del número recibido utilizando recursión.
Debe imprimir el resultado por consola o por el DOM.
Debe ser capaz de identificar si el doato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
5
120.
6
720.
Entrada: 
Salida:
Entrada: 
Salida: 
Pruébalo con los números que se te ocurran. */

function solicitarNumero() {
    let numero = prompt("Ingrese un número para calcular su factorial: ");
    
    while (isNaN(numero)) {
        console.error("Error: Ingresa un número válido.");
        numero = prompt("Ingrese un número para calcular su factorial: ");
    }
    
    return parseFloat(numero);
}

function calcularFactorial(numero){
    if(numero === 0 || numero === 1){
        return 1;
    }else {
        return numero * calcularFactorial(numero-1);
    }
}

let numero = solicitarNumero();

if (!isNaN(numero)) {
    let factorial = calcularFactorial(numero);
   
   console.log("El factorial de este numero es: " + factorial);
}

