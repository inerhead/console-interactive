require('colors');
const { mostrarMenu, pausa } = require('./helpers/message');


const main = async() => {
    console.clear();
    let exit = '';
    do {
        exit = await mostrarMenu();
        console.log(exit);
        await pausa();
    } while (exit != 0);

}


main();