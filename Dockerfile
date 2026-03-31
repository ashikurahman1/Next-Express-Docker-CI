#Stage 1: Build the client
FROM node:20-alpine AS builder
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# Stage 2: Run the server
FROM node:20-alpine
WORKDIR /app/server
COPY server/package*.json ./
RUN npm install
COPY server/ ./
COPY --from=builder /app/client/dist ./public
EXPOSE 4000
CMD ["node", "--loader", "ts-node/esm", "index.ts"]