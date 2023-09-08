const express = require("express");
const routes = express.Router();

const AnotacionController = require("./controllers/AnotacionController.js");
const PriorityController = require("./controllers/PriorityController.js");
const ContentController = require("./controllers/ContentController.js");

routes.post("/annotations", AnotacionController.create);
routes.get("/annotations", AnotacionController.read);
routes.delete("/annotations/:id", AnotacionController.delete);

//Rota priority

routes.get("/priorities", PriorityController.read);
routes.post("/priorities/:id", PriorityController.update);

// Rota content

routes.post("/contents/:id", ContentController.update);

module.exports = routes;
