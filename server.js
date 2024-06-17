//server.js
const express = require('express');
const app = express();

function setupServer() {
    return app;
}

module.exports = { setupServer };
