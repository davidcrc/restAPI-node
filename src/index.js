const app = require('./app');

async function main(){
    app.listen(3000);

    console.log('Escuchando en el puerto 3000');

}

// app.listen(3000, () => {
//     console.log('Escuchando en el puerto 3000');
// });

main();