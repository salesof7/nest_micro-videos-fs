FROM node:20.3-slim

USER node

WORKDIR /home/node/app

CMD ["tail", "-f", "/dev/null"]
