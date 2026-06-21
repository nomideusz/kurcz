# Build stage
FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies (use lockfile for reproducible builds)
COPY package.json package-lock.json* ./
RUN npm ci || npm install

# Copy source and build static output
COPY . .
RUN npm run build

# Production stage — serve static files with nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
