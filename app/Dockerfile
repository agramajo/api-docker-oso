FROM node:6.6.0
EXPOSE 3000
ADD www /www
ADD api /api
WORKDIR /api

RUN npm install
CMD ["npm","start"]

