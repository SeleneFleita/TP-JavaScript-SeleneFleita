let num1 = parseInt(prompt("Escriba el primer numero: "))
let num2 = parseInt(prompt("Escriba el segundo numero: "))
let num3 = parseInt(prompt("Escriba el tercer numero: "))


if (isNaN( num1)){
    console.log("ingrese un caracter valido")
} else if (isNaN( num2)){
    console.log("ingrese un caracter valido")
} else if (isNaN( num3)){
    console.log("ingrese un caracter valido")
}else if ((num1 == num2) && (num2 == num3) && (num3 == num1)){
    console.log("los numeros ingresados tienen el mismo valor")
} else if ( (num1 >= num2) && (num1 >= num3) && (num3 >= num2)){
    console.log(num2, num3,num1)
} else if ( (num1 >= num2) && (num1 >= num3) && (num2 >= num3)){
    console.log(num3, num2,  num1)
}else if ( (num2 >= num1) && (num2 >= num3) && (num3 >= num1)){
    console.log(num1,num3,num2)
} else if ( (num2 >= num1) && (num2 >= num3) && (num1 >= num3)){
    console.log(num3, num1,num2)
} else if ( (num3 >= num1) && (num3 >= num2) && (num2 >= num1)){
    console.log(num1, num2, num3)
}else if ( (num3 >= num1) && (num3 >= num2) && (num1 >= num2)){
    console.log(num2, num1, num3)
}
