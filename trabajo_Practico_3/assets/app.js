function control(nomTarea) {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(nomTarea);
}


function agregarTarea(nomTarea) {
    tarea.push(nomTarea)
    alert(tarea)
}
function listarTarea(){
    alert(tarea)
}
function editarTarea(nomTarea){
    let nuevoNom = prompt("Ingrese nuevo nombre de tarea: ")
tarea.splice(tarea.indexOf(nomTarea),1, nuevoNom)
}
function eliminarTarea(nomTarea){
    tarea.splice(tarea.indexOf(nomTarea),1,)
}

let cont = 1
let num
let tarea = []
let list = ""

while (cont !== 0) {
    num = parseInt(prompt(`Administrador de tareas: 
1.Agregar Tarea
2.Listar Tareas
3.Editar tareas
4.Eliminar Tarea
5.Salir del administrador de tareas`))
    switch (num) {
        case 1:
            agregarTarea(prompt("ingrese una tarea: "))
            break;
        case 2:
            listarTarea()
            break;
        case 3:
            editarTarea(prompt("Ingrese el nombre de la tarea a eliminar: "))
            break;
        case 4:
            eliminarTarea(prompt("Ingrese el nombre de la tarea ha eliminar: "))
            break;1
        case 5:
            cont = 0
            break;
        default:
            console.log("Valor ingresado no valido");
    }

}
alert("Ha salido del administrador de tareas")