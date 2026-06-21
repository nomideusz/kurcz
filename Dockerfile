# Build stage
FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies (use lockfile for reproducible builds)
COPY package.json package-lock.json* ./
RUN npm ci || npm install

# Copy source and build (static pages + Node server entry for /api/contact)
COPY . .
RUN npm run build

# Production stage — Node server (serves prerendered static + the contact endpoint)
FROM node:22-alpine

WORKDIR /app
ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=80

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

EXPOSE 80
CMD ["node", "./dist/server/entry.mjs"]
