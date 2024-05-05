let num1 = prompt("Escriba el primer numero: ")
let num2 = prompt("Escriba el segundo numero: ")
let num3 = prompt("Escriba el tercer numero: ")

if (isNaN(num1 || num2 || num3)){
    console.log("ingrese un caracter valido")
} else if (num1 == num2 && num2 == num3 && num3 == num1){
    console.log("los numeros ingresados tienen el mismo valor")
} else if ( num1 >= num2 && num1 >= num3 && num3 >= num2){
    console.log(num2, ", ", num3,", ",num1)
} else if ( num1 >= num2 && num1 >= num3 && num2 >= num3){
    console.log(num3, ", ", num2, ", ", num1)
} else if ( num2 >= num1 && num2 >= num3 && num3 >= num1){
    console.log(num1, ", ", num3,",", num2)
} else if ( num2 >= num1 && num2 >= num3 && num1 >= num3){
    console.log(num3, ", ", num1, ",", num2)
} else if ( num3 >= num1 && num3 >= num2 && num2 >= num1){
    console.log(num1, ", ", num2, ", ", num3)
}else if ( num3 >= num1 && num3 >= num2 && num1 >= num2){
    console.log(num2, ", ", num1, ", ", num3)}


