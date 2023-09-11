const { request, get } = require('https');

// https://nodejs.org/api/modules.html#modules_all_together
// File must be present at current drive /node_modules. 
// require('testing-path-resolution.js');

/* const request = request('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data Chunk: ${chunk}`);
    })

    res.on('end', () => {
        console.log('No more data.');
    })
});

request.end(); */

get('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data Chunk: ${chunk}`);
    })

    res.on('end', () => {
        console.log('No more data.');
    })
});