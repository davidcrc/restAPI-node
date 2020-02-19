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
