
## Buliding nginx image
FROM nginx:1.13.0-alpine




## Running the basic update of nginx
RUN apk update && apk add bash && apk add tzdata &&\ 
    cp /usr/share/zoneinfo/Asia/Kolkata /etc/localtime &&\ 
    echo "Asia/Kolkata" > /etc/timezone &&\ 
    apk del tzdata && rm -rf /var/cache/apk/*