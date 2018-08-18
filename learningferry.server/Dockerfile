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
RUN npm set progress=false && npm config set depth 0 
RUN npm install -g nodemon
RUN npm install -g typescript
RUN npm install -g bash

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm install && mkdir /app && cp -R ./node_modules ./app

WORKDIR /app

COPY . .

## building pacakage
RUN npm run build



## running pm2
##CMD ["pm2-dev", "start","pm2.json" ]

CMD [“node”, “dist/index.js”]