const inquirer = require('inquirer');
require('colors');

const preguntas = [{
    type: 'list',
    name: 'opcion',
    message: 'Que desea hacer ?',
    choices: [{
            value: '1',
            name: '1. Crear tarea'
        },
        {
            value: '2',
            name: '2. Listar tareas'
        },
        {
            value: '3',
            name: '3. Listar tareas completadas'
        },
        {
            value: '4',
            name: '4. Listar tareas pendientes'
        },
        {
            value: '5',
            name: '5. Completar tarea(s)'
        },
        {
            value: '6',
            name: '6. Borrar tarea'
        },
        {
            value: '0',
            name: '0. Salir'
        },
    ]
}];

const inquirerMenu = async() => {
    console.clear();

    console.log('================================='.green);
    console.log('       Choose an Option'.green);
    console.log('=================================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;

};

const pausa = async() => {

    const preguntaPausa = [{
        type: 'input',
        name: 'enter',
        message: `\nPress ${'ENTER'.green} to continue...\n`
    }];

    console.log('\n');
    await inquirer.prompt(preguntaPausa);

}

const confirmar = async(msj) => {

    const preguntaConfirmar = [{
        type: 'confirm',
        name: 'Confirmar',
        message: msj
    }];

    console.log('\n');
    const { Confirmar } = await inquirer.prompt(preguntaConfirmar);
    console.log(Confirmar);
    return Confirmar;
}

const leerInput = async(message) => {
    const preguntaPausa = [{
        type: 'input',
        name: 'desc',
        message,
        validate(value) {
            if (value.length === 0) {
                return 'Por favor ingrese un valor'.red;
            }

            return true;
        }
    }];

    console.log('\n');
    const { desc } = await inquirer.prompt(preguntaPausa);
    return desc;
};

const listadoTareasBorrar = async(tareas) => {

    let choices = [
        {
            value: `0`,
            name: `0. Cancelar`
        }
    ];
    tareas.forEach(({ desc, id }, index) => {

        const choise = {
            value: `${id.toString()}`,
            name: `${(index + 1).toString()}. ${desc}`
        };
        choices.push(choise);
    });



    const preguntasBorrar = [{
        type: 'list',
        name: 'opcion',
        message: 'Cual desea eliminar ?',
        choices
    }];

    console.log('\n\n');
    const { opcion } = await inquirer.prompt(preguntasBorrar);
    return opcion;

};

const listadoTareasCompletar = async(tareas) => {

    let choices = [];
    tareas.forEach(({ desc, id, completadoEn }, index) => {

        const choise = {
            value: `${id.toString()}`,
            name: `${(index + 1).toString()}. ${desc}`,
            checked: completadoEn ? true : false
        };
        choices.push(choise);
    });



    const preguntasBorrar = [{
        type: 'checkbox',
        name: 'ids',
        message: 'Cual desea eliminar ?',
        choices
    }];

    console.log('\n\n');
    const { ids } = await inquirer.prompt(preguntasBorrar);
    return ids;

};

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    listadoTareasCompletar
};