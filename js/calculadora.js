function  calcular(){
    let primerNro = prompt("Ingresa el primer numero")
    let segundoNro = prompt("Ingresa el segundo numero")
    let operador = prompt( "Selecciona la operacion +, -, /, *")
    console.log ("resultado", realizarCalculo (primerNro, segundoNro, operador))
} 

function realizarCalculo (num1, num2, ope){
    switch (ope){
        case "+": return num1 + num2

        case "-": return num1 - num2

        case "*": return num1 * num2

        case "/": return num1 / num2

        default: "Error en el calculo"
    }
}