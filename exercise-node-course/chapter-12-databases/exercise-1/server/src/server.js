const app = require('./app');
const process = require('process');
const http = require('http');
const mongoose = require('mongoose');
const server = http.createServer(app);

require('dotenv').config();

const {loadPlanetsData} = require('./models/planets.model');

const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;

async function startServer() {
    await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    await loadPlanetsData();
    server.listen(PORT, () => {
        console.log(`Listening on PORT ${PORT}`);
    });
}

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

startServer();
