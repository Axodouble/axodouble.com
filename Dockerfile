# Define our base
FROM node:18-alpine AS base

# Create dependencies platform
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Create builder platform
FROM base AS builder
WORKDIR /app
# Copy the node_modules from the dependencies platform
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Create runner platform
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
# Set group & user permissions
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
# Copy the public directory from the builder platform
COPY --from=builder /app/src/public ./public
# Create next dir and assign permissions
RUN mkdir .next
RUN chown nextjs:nodejs .next
# Copy the standalone build & static content
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
# Run
CMD HOSTNAME="0.0.0.0" node server.js
