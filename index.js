const http = require('http');
var path = require("path");
const util = require("util");
const v8 = require("v8");
const hostname = '127.0.0.1';
const port = 8888;
const server = http.createServer((request, response) => {
 response.statusCode = 200;
 response.setHeader('Content-Type', 'text/plain');
 response.end('Hello, from node.js serwer !\n');

});

var S = require('string');
server.listen(port, hostname, () => {
 util.log(v8.getHeapStatistics());
 console.log(path.basename(__filename));
 util.log(path.join(__dirname, 'uploads','images'));
 console.log(`Server running at http://${hostname}:${port}/`);
});
const chalk = require('chalk');
const log = console.log;
 
// Combine styled and normal strings
log(chalk.red('Maciej'));
log(chalk.white('Sierżęga :)'));
log(chalk.green(':)'));
 

 
