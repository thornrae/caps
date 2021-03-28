'use strict';

const server = require('./modular/server.js');
require('dotenv');
const port = process.env.PORT || 3000

server.start(port);

