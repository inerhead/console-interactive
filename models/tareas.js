const { green } = require("colors");
const Tarea = require("./tarea");

class Tareas {


    constructor() {
        this._listado = new Map();
    }

    crearTarea(desc) {

        const tarea = new Tarea(desc);
        this._listado.set(tarea.id, tarea);

    }

    mostrarTareas() {
        let list = [];

        let listado2 = [...this._listado.values()];
        // this._listado.forEach((task) => list.push(task.desc));
        // console.log(listado2);
        return listado2;
    }

    tareasCompletadas() {

        let items = this.mostrarTareas().filter(tarea => tarea.completadoEn);

        items.forEach(({ desc, completadoEn }, index) => console.log(`\n${(index + 1).toString().green}${'.'.green} ${desc} :: ${completadoEn.toString().green}`));

    }

    listadoPendientes() {

        let items = this.mostrarTareas().filter(tarea => !tarea.completadoEn);

        items.forEach(({ desc }, index) => console.log(`\n${(index + 1).toString().green}${'.'.green} ${desc} :: ${'Pendiente'.red}`));
        //console.log(items);

    }

    listadoCompleto() {

        let value = 1;
        for (const tarea of this.mostrarTareas().values()) {
            console.log(`\n${value.toString().green}${'.'.green} ${tarea.desc}  :: ${ tarea.completadoEn ? 'Completada'.green : 'Pendiente'.red }`);

            value++;
        }

        return [...this.mostrarTareas().values()];
    }

    cargarTareasFromArray(tareas) {


        for (const tarea of tareas.values()) {

            this._listado.set(tarea.id, tarea);
        }

    }

    borrarTarea(id) {
        const valido = this._listado.delete(id);
        //console.log(valido);
        return valido;

    }

}

module.exports = Tareas;