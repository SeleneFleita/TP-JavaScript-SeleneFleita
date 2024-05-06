let dia = Number(prompt("ingrese un numero del 1 al 7: "))

// if (isNaN(dia)){
// console.log("ingrese un caracter valido")
// }else if( dia == 1){
//     console.log("El numero ingresado corresponde al dia Lunes")
// }else if( dia == 2 ){
// console.log("El numero ingresado corresponde al dia Martes")
// } else if (dia == 3){
// console.log("El numero ingresado corresponde al dia Miercoles")
// } else if (dia == 4){
//     console.log("El numero ingresado corresponde al dia Jueves")
// }else if (dia == 5){
//     console.log("El numero ingresado corresponde al dia Viernes")
// } else if (dia == 6){
//     console.log("El numero ingresado corresponde al dia Sabado")
// }else if (dia == 7){
//         console.log("El numero ingresado corresponde al dia Sabado")
// } else if ( dia >= 8){
//     console.log("ingrese un numero del 1 al 7")

// }
switch(dia){
    case 1:
        console.log("el numero ingresado corresponde al dia lunes")
    break;
    case 2: 
    console.log("el numero ingresado corressponde al dia martes")
    break;
    case 3:
    console.log("el numero ingresado corresponde al dia miercoles")
    break;
    case 4:
    console.log("el numero ingresado corresponde al dia jueves")
    break;
    case 5:
    console.log("el numero ingresado corresponde al dia viernes")
    break;
    case 6:
    console.log("el numero ingresado corresponde al dia sabado")
    break;
    case 7: 
    console.log("el numero ingresado corresponde al dia domingo")
    break;
    default:
    console.log("el caracter ingresado no es valido")
    break;
} 