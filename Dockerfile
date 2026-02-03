# ===== BUILD STAGE =====
FROM oven/bun:alpine AS builder
WORKDIR /app

COPY bun.lock package.json ./
RUN bun install

COPY . .
RUN bun run build

# ===== RUNTIME STAGE =====
FROM oven/bun:alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["bun", "server.js"]
