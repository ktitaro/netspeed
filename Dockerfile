FROM node:20.8.0
WORKDIR /app
COPY . .
RUN npm install
ENTRYPOINT ["node", "./netspeed"]