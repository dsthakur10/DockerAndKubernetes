# Specify a base image
# FROM alpine
FROM node:14-alpine

# Specify the working directory 
WORKDIR /usr/devendra/app
 
# Copy required files inside container
COPY ./ ./

# Install some dependencies
RUN npm install

#Default command
CMD ["npm", "start"]