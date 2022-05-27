/**
 * @file Bootstrap express.js server
 */

const express = require("express");
const cors = require("cors");
const YAML = require("yamljs");
const swaggerUi = require("swagger-ui-express");
const morgan = require("morgan");

const router = require("../config/routes");
const swaggerDocument = YAML.load("./openapi.yaml");
const app = express();

require("dotenv").config;

/** Install request logger */
app.use(morgan("dev"));

app.use(cors());

/** Install JSON request parser */
app.use(express.json());
app.use(express.static("assets"));

/** Open API Documentation */
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/** Install Router */
app.use(router);

module.exports = app;
