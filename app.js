require('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
// const { mostrarMenu, pausa } = require('./helpers/message');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');


const main = async() => {
    console.clear();
    let opt = '';
    let tareas = new Tareas();


    do {
        const info = leerDB();
        if (info) {
            tareas.cargarTareasFromArray(info);
        }

        opt = await inquirerMenu();
        // opt = await mostrarMenu();
        switch (opt) {
            case '1':
                const msj = await leerInput('Descripción: ');
                tareas.crearTarea(msj);
                break;

            case '2':
                const items = tareas.listadoCompleto();
                //console.log(items);
                break;

            case '3':
                tareas.tareasCompletadas();
                break;

            case '4':
                tareas.listadoPendientes();
                break;

            case '6':
                const itemsBorrar = tareas.mostrarTareas();
                const itemId = await listadoTareasBorrar(itemsBorrar);
                //console.log(itemId);
                tareas.borrarTarea(itemId);
                break;


            default:
                break;
        }

        guardarDB(JSON.stringify(tareas.mostrarTareas()));
        if (opt !== '0') await pausa();
    } while (opt != 0);

}


main();