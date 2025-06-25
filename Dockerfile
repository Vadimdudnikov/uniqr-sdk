# ---------- build stage ----------
FROM node:lts-alpine AS build
WORKDIR /app
COPY . .
RUN corepack enable && corepack prepare pnpm@10.12.3 --activate \
    && pnpm i --frozen-lockfile \
    && pnpm run build

# ---------- runtime stage ----------
FROM node:lts-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/dist ./dist
# копируем только prod-зависимости
COPY --from=build /app/node_modules ./node_modules
EXPOSE 8080
CMD ["node", "dist/demoRest.js"]

