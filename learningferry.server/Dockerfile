##STAGE 1 : Building image
FROM keymetrics/pm2:latest-alpine
## Copying SRC
COPY src src/
##COPY tsconfig.json
COPY tsconfig.json .
##COPY package.JSON
COPY package.json . 
##COPY package-lock.JSON
COPY package-lock.json .
##COPY pm2.json
COPY  pm2.json .

## celaning npm cahce
RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

## building pacakage
RUN npm run build



## running pm2
CMD ["pm2-dev", "start","pm2.json" ]