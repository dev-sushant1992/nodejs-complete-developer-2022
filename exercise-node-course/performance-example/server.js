const express = require('express');
const cluster = require('cluster');
// const process = require('process');
const os = require('os');

const app = express();

console.log(`Running server.js...${process.pid}`);

app.get('/', (req, res) => {
    // JSON.stringify({}) => "{}"
    // JSON.parse("{}") => {}
    // [3, 2, 1, 4, 5].sort() 
    res.send(`Performance example ${process.pid}`);
});

app.get('/timer', (req, res) => {
    delay(9000);
    res.send(`Ding Ding Ding! ${process.pid}`);
});

function delay(duration) {
    const startTime = Date.now();

    while(Date.now() - startTime < duration) {
    }
}

if(cluster.isMaster) {
    console.log('Master has been started...');
    const NUM_WORKERS = os.cpus().length;
    for (let index = 0; index < NUM_WORKERS; index++) {
        cluster.fork();
    }
} else {
    console.log('Worker process started...');
    app.listen(3000);
}