FROM nginx:stable

COPY /storybook-static/ /var/www
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80