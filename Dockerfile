FROM node:22.19-alpine as build

WORKDIR /app

COPY Frontend/package*.json ./
RUN npm install

COPY Frontend ./
RUN npm run build