# pull image from docker hub
FROM node:12.16.1-alpine3.9

# creating app directory
RUN mkdir /app
#set workdirectory as /app so that no need to mention each timne /app 
WORKDIR /app

# copy local package.json and yarn.lock to work directory
COPY package.json .
COPY yarn.lock .

# install dependencies by running yarn command
RUN yarn 

# copy all local source code to work directory
COPY . .

# create label
LABEL maintainer="Deepak Govindarajan <deepak.g@krds.fr>"

# start server 
CMD node index.js