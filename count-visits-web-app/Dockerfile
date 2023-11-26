FROM node:alpine

WORKDIR /usr/devendra/count-visits-web-app

COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "start"]
