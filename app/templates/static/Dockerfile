FROM node:12.14.1-alpine

ENV NODE_ENV=production

USER node:1000
WORKDIR /home/node/app

COPY --chown=node:1000 package*.json ./

RUN npm ci --only=production

COPY --chown=node:1000 ./server.js ./CHANGELOG.md .
COPY --chown=node:1000 ./htdocs ./htdocs
COPY --chown=node:1000 ./js ./js
COPY --chown=node:1000 ./config ./config

ENTRYPOINT ["node", "server.js"]
