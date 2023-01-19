FROM node:15

WORKDIR /app

COPY ./ ./

RUN npm install

RUN npm run createdb

RUN npm run createtable

RUN npm run createproduct

CMD ["node","index.js"]