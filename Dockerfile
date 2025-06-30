#################################
# 1️⃣  Build stage
#################################
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --prefer-offline
COPY . .
RUN npm run build            # ↖️ outputs static files in /app/dist

#################################
# 2️⃣  Runtime stage
#################################
FROM nginx:1.27-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
