FROM node:20.8.0
WORKDIR /app
COPY ./package.json ./package.json
COPY ./netspeed.mjs ./netspeed.mjs
RUN npm install
ENTRYPOINT ["npm", "run", "start"]