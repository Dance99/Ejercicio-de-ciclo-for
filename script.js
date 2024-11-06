//creo las variables para guardar los numeros negativos, positivos, multiplosde15
let negativos = 0;
let positivos = 0;
let multiplosDe15 = 0;

// El bucle for se ejecuta 5 veces (i va de 1 a 5). En cada iteración,
// se solicita un número al usuario mediante prompt. parseInt convierte el valor ingresado en un número entero.
for (let i = 1; i <= 5; i++) {
    // Solicitamos al usuario ingresar un número
    let numero = parseInt(prompt(Ingrese el valor ${i} de 5:));

        // Si el número ingresado es mayor a 0, aumenta la variable positivos en 1.
Si el número es menor a 0, aumenta negativos en 1.
        if (numero > 0) {
            positivos++;
        } else if (numero < 0) {
            negativos++;
    
