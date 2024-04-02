FROM node:latest
WORKDIR /app
COPY *.json .
RUN npm install
COPY . .
RUN npm run build
CMD ["npm","start"]