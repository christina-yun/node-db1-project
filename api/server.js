const express = require("express");

const AccountsRouter = require('./accounts/accounts-router');

const server = express();

server.use(express.json());

server.use('/api/accounts', AccountsRouter);

server.use("*", (req, res, next) =>{
    next({ status: 404, message: `${req.method} ${req.originalUrl} not found!`});
});

module.exports = server;
