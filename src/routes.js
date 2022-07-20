const express = require('express');

const routes = express.Router();

const controllers = require('./controllers');

routes.get('/process-queue', controllers.ProcessQueueController.get);
routes.get('/process-queue/reset', controllers.ProcessQueueController.reset);

module.exports = routes;
