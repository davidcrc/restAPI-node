1. Inicializa el proyecto y crea package: salva dependencias del proyecto
        
        npm init -y

2. Instalar express: Framework para el REST API
        
        npm i express

3. Creamos una carpeta src (para ordenar  mejor), y creamos el index.js; el cual iniciara el servidor de node o express.


4. Añadimos las variables requeridas para levantar express (en app.js):

        const express = require('express');

        const app = express();
        
        // Aqui exporto la variable app
        module.exports = app;

5. Llamamos al obejto de express en (index.js):

        const app = require('./app');

        app.listen(3000, () => {
            console.log('Escuchando en el puerto 3000');
        });

6. Ejecutar nuestro src/index.js :

        node src/index.js

7. Podemos instalar 'morgan' para escuchar las peticiones http en la consola:

        npm i morgan

8. Añadir rutas para manejar direcciones URI.
