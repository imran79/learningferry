### STAGE 1: Build ###

# We label our stage as 'builder'
FROM node:8.11.1
# The qq is for silent output in the console
# You are welcome to modify this part as it
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev vim
## Copying SRC
COPY src src/
##COPY tsconfig.json
COPY tsconfig.json .
##COPY package.JSON
COPY package.json . 
##COPY package-lock.JSON
RUN rm -rf package-lock.json
COPY package-lock.json .

COPY angular.json .



RUN npm set progress=false && npm config set depth 0 && npm cache clean --force




## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN rm -rf node_modules && rm -rf ng-app && npm cache clear --force && npm install
RUN npm install -g @angular/cli
RUN  mkdir /ng-app && cp -R ./node_modules ./ng-app


WORKDIR /ng-app

COPY . .









### STAGE 2: Setup ###

##FROM nginx:1.13.3-alpine

## Copy our default nginx config
##COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
##RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
##COPY --from=builder /ng-app/dist /usr/share/nginx/html

##Un comment it in production
##CMD ["nginx", "-g", "daemon off;"]

