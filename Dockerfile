# Dockerfile for Yin Rui Final Site

# Build Stage
FROM node:20 AS build
WORKDIR /yin_rui_final_site
COPY . .
RUN npm install && npm run build

# Production Stage
FROM nginx:stable-alpine
WORKDIR /yin_rui_final_site
COPY --from=build /yin_rui_final_site/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
