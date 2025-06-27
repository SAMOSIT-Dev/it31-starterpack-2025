FROM node:22-slim
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN apt-get update -y && apt-get install -y openssl
COPY . .
EXPOSE 8080
CMD ["sh", "-c", "npm run db:pull && npm run db:generate && npm run start"]