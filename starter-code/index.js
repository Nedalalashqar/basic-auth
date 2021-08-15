'use strict';

require('dotenv').config();

const server = require('./server');
const {db} = require('./app'); 

db.sync().then(()=> {
    server.start(process.env.PORT|| 8080);
})
.catch(`Error runing server ${console.error}`);
