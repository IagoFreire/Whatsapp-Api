const express = require("express");

const MessageController = require("./controllers/MessageController");

const routes = express.Router();

routes.post("/send", MessageController.store);

module.exports = routes;
