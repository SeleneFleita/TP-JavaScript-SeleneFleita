function control(nomTarea) {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(nomTarea);
}
function agregarTarea(nomTarea) {
    if (control(nomTarea)) {
        if (!tarea.includes(nomTarea)) {
            tarea.push(nomTarea)
            alert(`Tarea agregada: ${nomTarea}`)
        } else {
            alert("La tarea ya esta incluida en la lista")
        }
    } else {
        alert("No es valido el valor ingresado")
    }
}
function listarTarea() {
    alert(`Las tareas existentes son: ${tarea}`)
}
function editarTarea(nomTarea) {
    if (tarea.includes(nomTarea)) {
        let nuevoNom = prompt("Ingrese nuevo nombre de tarea: ")
        if (control(nuevoNom)) {
            if (!tarea.includes(nuevoNom)) {
                tarea.splice(tarea.indexOf(nomTarea), 1, nuevoNom)
            } else {
                alert("La tarea ya esta incluida en la lista")
            }
        } else {
            alert("No es valido el valor ingresado")
        }
    } else {
        alert(" La tarea ingresada no existe en la lista")
    }
}
function eliminarTarea(nomTarea) {
    if (!tarea.includes(nomTarea)) {
        alert("La tarea no existe en la lista")
    } else {
        tarea.splice(tarea.indexOf(nomTarea), 1,)
    }
}

let cont = 1
let num
let tarea = []
while (cont !== 0) {
    num = parseInt(prompt(`Administrador de tareas: 
1.Agregar Tarea
2.Listar Tareas
3.Editar tareas
4.Eliminar Tarea
5.Salir del administrador de tareas`))
    switch (num) {
        case 1:
            agregarTarea(prompt("Ingrese una tarea: "))
            break;
        case 2:
            listarTarea()
            break;
        case 3:
            editarTarea(prompt("Ingrese el nombre de la tarea a editar: "))
            break;
        case 4:
            eliminarTarea(prompt("Ingrese el nombre de la tarea ha eliminar: "))
            break; 1
        case 5:
            cont = 0
            break;
        default:
            console.log("Valor ingresado no valido");
    }
}
alert("Ha salido del administrador de tareas")