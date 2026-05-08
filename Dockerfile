# Этап 1: Build (сборка приложения)
FROM node:18-alpine AS builder

WORKDIR /app

# Копируем файлы зависимостей
COPY package*.json ./
COPY *.lock* ./

# Устанавливаем ВСЕ зависимости (нужны для build)
RUN npm ci --only=production=false

# Копируем исходный код
COPY . .

# Собираем приложение (предполагаем, что npm run build создаёт dist/)
RUN npm run build

# Этап 2: Production (runtime с Nginx)
FROM nginx:alpine

# Копируем собранные файлы из builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Опционально: Копируем кастомную конфигурацию Nginx (если нужна)
# COPY nginx.conf /etc/nginx/nginx.conf

# Порт для Nginx (по умолчанию 80, но можно изменить)
EXPOSE 80

# Nginx запустится автоматически
CMD ["nginx", "-g", "daemon off;"]
