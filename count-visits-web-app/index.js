const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({

    // If it was traditional Node application, we would have provided connection URL to access Redis-server
    // host: 'https://my-redis-server.com'

    // But now since we are using Docker-Compose, we will just provide service name of redis-server created inside docker-compose.yml file 
    host: 'redis-server',
    port: 6379
});

client.set('visits', 0);

app.get("/", (req, res) => {

    process.exit(0); // to check restart container options of Docker-compose

    client.get('visits', (err, visits) => {
        res.send("Number of visits = " + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8888, () => {
    console.log("Listening on port 8888");
});