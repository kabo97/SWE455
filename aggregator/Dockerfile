FROM node:18
WORKDIR /app
COPY index.js .
RUN npm init -y
RUN npm install express axios
CMD ["node", "index.js"]