# 使用 Nginx 部署 React 生产环境

# 构建阶段
FROM node:20 AS build
WORKDIR /yin_rui_final_site
COPY . .
RUN npm install && npm run build

# 生产阶段
FROM nginx:stable-alpine
WORKDIR /yin_rui_final_site
COPY --from=build /yin_rui_final_site/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
