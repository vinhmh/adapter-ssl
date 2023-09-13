FROM node:18.12.1-alpine3.16 AS production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --silent

COPY . .

RUN npm run-script build

EXPOSE 3000

CMD [ "npm", "run","start:prod" ]