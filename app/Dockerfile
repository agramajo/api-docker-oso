FROM node:6.6.0
EXPOSE 3000
ADD api /api
ADD www /www
WORKDIR /api

RUN npm install
CMD ["node","server.js"]

