// livereload-setup.js
const livereload = require('livereload');
const server = livereload.createServer();
server.watch(__dirname + "/dist");
