FROM node:slim

WORKDIR /var/test-projects-docker/image-container-project

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 2000

CMD [ "node", "app.js" ]

