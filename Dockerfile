# Specify a base image
FROM node:alpine

#Install some dependencies

WORKDIR /var/www/html
COPY ./ /var/www/html
RUN npm install

# Set up a default command
CMD [ "npm","start" ]