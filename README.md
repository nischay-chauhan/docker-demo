## Docker
In this project i am  implementing the basic knowdledge of dockers and all.

## Commands
- To make a container 

 ```
docker buiild -t <image_name>
```

- to run the docker
```
docker run -v "$(pwd)":/app -p 3000:3000 -d --name node-app <image_name>
node-app-image
```

- to remove the docker 
```
docker rm node-app -f 
```