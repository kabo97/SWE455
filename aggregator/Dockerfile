FROM node:18

WORKDIR /app
COPY . .

RUN npm init -y
RUN npm install express cors axios

CMD ["node", "index.js"]
