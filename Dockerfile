# Usa Node.js oficial
FROM node:18

# Crea directorio de trabajo
WORKDIR /app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto (ejemplo 3000)
EXPOSE 3000

# Comando de inicio
CMD ["npm", "start"]
