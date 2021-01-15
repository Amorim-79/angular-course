FROM node:10-alpine as angular
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/http /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/cong.d/default.conf

# docker build -t course-angular .
# docker run -p 8081:80 course-angular
