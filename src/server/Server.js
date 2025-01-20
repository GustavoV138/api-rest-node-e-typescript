"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
var express_1 = require("express");
var server = (0, express_1.default)();
exports.server = server;
server.get('/', function (req, res) {
    res.send('Olá Dev!');
});
