require('colors');



const mostrarMenu = async() => {

    return new Promise((resolve, reject) => {
        console.clear();

        console.log('================================='.green);
        console.log('       Choose an Option'.green);
        console.log('=================================\n'.green);

        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Salir \n`);


        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question(`Select an Option:`, (opt) => {
            resolve(opt);
            readLine.close();
        });
    });
};

const pausa = () => {
    return new Promise((resolve, reject) => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question(`\nPress ${'ENTER'.green} to continue...\n`, (opt) => {

            readLine.close();
            resolve();

        });
    });
};

module.exports = {
    mostrarMenu,
    pausa
};