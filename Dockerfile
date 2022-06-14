FROM node:16
WORKDIR /app
EXPOSE 3000
COPY package*.json ./
RUN npm install --silent
COPY . .
CMD ["npm", "start"]