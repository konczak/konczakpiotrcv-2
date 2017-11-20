Note: Bootstrap CSS isn't required in index.html as it is included via scss file in main.scss
Similar for JS - they are included one by one instead of minified one.

#Docker

Build image

    docker build -t kpcv .

Run container

    docker run -d -p 80:80 --name kpcv kpcv

Open in browser

    http://192.168.99.100/

Remove container

    docker rm -f kpcv
    
Remove image

    docker rmi kpcv
