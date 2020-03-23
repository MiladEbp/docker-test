FROM node:10

WORKDIR /var/test-projects-docker/git-projects

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 2000

CMD [ "node", "app.js" ]

