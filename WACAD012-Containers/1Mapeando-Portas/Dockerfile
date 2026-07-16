FROM ubuntu:latest

RUN apt-get update && \
    apt-get install -y nginx && \
    apt-get clean

COPY index.html /var/www/html/index.html

RUN sed -i 's/listen 80 default_server;/listen 7000 default_server;/' /etc/nginx/sites-available/default && \
    sed -i 's/listen \[::\]:80 default_server;/listen [::]:7000 default_server;/' /etc/nginx/sites-available/default

EXPOSE 7000

CMD ["nginx", "-g", "daemon off;"]

# Build:
# docker build -t nginx-7000 .
#
# Run:
# docker run -p 8080:7000 nginx-7000