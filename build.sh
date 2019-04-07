docker build -t egg-demo .
docker stop egg-demo-s && docker rm egg-demo-s
docker run -d -p 80:7001 --name egg-demo-s egg-demo