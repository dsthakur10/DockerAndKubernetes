# Specify a base image
# FROM alpine
FROM node:14-alpine

# Specify the working directory 
WORKDIR /usr/devendra/app
 
# Copy package.json inside container so that npm can install dependencies --> This will stop Docker to re-install unchange dependencies
COPY ./package.json ./

# Install some dependencies
RUN npm install

# Copy remaining required files inside container
COPY ./ ./

#Default command
CMD ["npm", "start"]