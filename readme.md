## Ejemplo basico nodejs, express y docker

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

        -- run (node file):
        node src/index.js

        -- PODEMOS modificar el archivo package.json -> scripts y modificar,
        de tal manera que ahora podemos ejecutar directamente : npm start
        para iniciar el servidor de node!!!!

        "scripts": {
            "start": "node src/index.js"
        }

7. Podemos instalar 'morgan' para escuchar las peticiones http en la consola:

        npm i morgan

8. Añadir rutas para manejar direcciones URI.

## Manejando docker

1. Crear un Dockerfile y configurar el archivo:

        -- Dcokerfile:
        
        # Llamaremos al img de node v12
        FROM node:12

        # Creamos un directorio de trabajo para el projecto
        WORKDIR /app

        # Copiamos nuestros archivos al docker
        COPY package*.json ./

        # instalamos deacuerdo al package*.json
        RUN npm install

        # Copiamos la carpeta src
        COPY . .

        # TODO: Ejecutar el proyecto!! o.O, how function is?
        # CMD [ "node", "src/index.js" ]
        CMD [ "npm", "start" ]


        -- Creamos .dockerignore, nos permite ignorar cosa, asi como gitignore

        node_modules
        npm-debug.log

2. Por ultimo ejecutamos docker
        
        -- Para construirlo
        docker build -t restapi-node .

        -- para correrlo en interactivo:
        docker run -it -p 4000:3000 restapi-node

        -- para correrlo in background
        docker run -d -p 4000:3000 restapi-node