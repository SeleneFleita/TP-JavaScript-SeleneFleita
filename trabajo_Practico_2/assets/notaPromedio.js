let nota1 = parseInt(prompt("Ingrese nota del primer trimestre: "));
let nota2 = parseInt(prompt("Ingrese nota del segundo trimestre: "));
let nota3 = parseInt(prompt("Ingrese nota del tercer cuatrimestre:"));

if(isNaN(nota1)|| isNaN(nota2)|| isNaN(nota3)){
    console.log("ingrese un numero del 1 al 10")
} else if ((nota1 > 10) || (nota2 > 10) || (nota3 > 10)){
    console.log('nota mayor a la valida');
} else if ((nota1 <= 0) || (nota2 <= 0) || (nota3 <= 0)){
    console.log("nota menor a la valida");
}else {
    let  promedio = parseInt((nota1+nota2+nota3)/3)
    if ((promedio >= 1) && (promedio <= 3)){
        console.log("Nota insuficiente")
        } else if ((promedio >= 4) && (promedio <= 5)){
        console.log("Nota Regular")
        } else if((promedio >= 6) && (promedio <= 7)){
            console.log("Nota Buena")
        }else if((promedio >= 8) && (promedio <= 9)){
            console.log("Nota Muy Buena")
        }else if((promedio == 10)){
            console.log("Nota Sobresaliente")
        }
    }
