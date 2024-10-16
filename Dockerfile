FROM node:20.18

WORKDIR /app
COPY package.json .

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build


EXPOSE 3001

CMD [ "serve", "-s", "dist", "-p", "3001" ]
