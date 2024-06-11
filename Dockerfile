# Specify a base image
FROM node:alpine

#Install some dependencies

WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install
RUN npm i -g next@latest react@latest react-dom@latest
RUN npm run build

# Set up a default command
CMD [ "npm","start" ]