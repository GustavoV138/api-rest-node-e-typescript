/* eslint-disable @typescript-eslint/no-empty-object-type */
import express from "express";

const server = express();

server.get("/", (req, res) => {
    res.send("Olá Dev!");
});

export { server };
