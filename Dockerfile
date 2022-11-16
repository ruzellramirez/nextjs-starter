# start with a base node image
FROM node:16-alpine

# create a working directory to avoid having it on root
WORKDIR /app

#  this layer is cached at first build
COPY package.json yarn.lock ./
RUN yarn install

COPY . .

CMD ["yarn","dev"]