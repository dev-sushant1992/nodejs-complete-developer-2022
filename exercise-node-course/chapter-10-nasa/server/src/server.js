const app = require('./app');
const process = require('process');
const http = require('http');
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;
const {loadPlanetsData} = require('./models/planets.model');

async function startServer() {
    await loadPlanetsData();
    server.listen(PORT, () => {
        console.log(`Listening on PORT ${PORT}`);
    });
}

startServer();
