FROM node:18

WORKDIR /app
COPY package.json .
COPY server.js .

RUN npm install
# RUN npm run build
EXPOSE 5000

CMD ["node", "server.js"]
