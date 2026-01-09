FROM node:22

COPY src /opt/app/src/
COPY scripts /opt/app/scripts/
COPY tsconfig* package*.json /opt/app/

WORKDIR /opt/app

RUN npm install
RUN npm run build

EXPOSE 8080
EXPOSE 9464

CMD ["npm", "start"]