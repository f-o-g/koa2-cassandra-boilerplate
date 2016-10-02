FROM node:6.3.0

MAINTAINER acentelles "https://github.com/acentelles"

RUN mkdir -p /var/app

WORKDIR /var/app

COPY . /var/app/

RUN npm install

RUN npm run build

RUN npm install -g pm2

ENV NODE_ENV production

EXPOSE 5000

# USER nobody
WORKDIR /var/app

CMD ["pm2", "start", "index.js", "--no-daemon"]