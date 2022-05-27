const express = require("express");
const controllers = require("../app/controllers");
const authorization = require("../app/middlewares/authorization")

const apiRouter = express.Router();

// Authentication Route
apiRouter.post("/api/v1/register", controllers.api.v1.userController.register);
apiRouter.post("/api/v1/login", controllers.api.v1.userController.login);

// Route for showing current logged in user 
apiRouter.get("/api/v1/whoami", authorization.authorize, controllers.api.v1.userController.whoAmI);

// Route for adding admin by id (restricted for superadmin only)
apiRouter.post("/api/v1/add-admin/:id", authorization.authorizeSuperAdmin, controllers.api.v1.userController.addAdmin);

// CRUD Car's Data Route (restricted for admin only)
apiRouter.get("/api/v1/dashboard-car", authorization.authorizeAdmin, controllers.api.v1.carController.getAll);
apiRouter.get("/api/v1/dashboard-car/:id", authorization.authorizeAdmin, controllers.api.v1.carController.getById);
apiRouter.post("/api/v1/create-car", authorization.authorizeAdmin, controllers.api.v1.carController.create);
apiRouter.post("/api/v1/update-car/:id", authorization.authorizeAdmin, controllers.api.v1.carController.update);
apiRouter.get("/api/v1/delete-car/:id", authorization.authorizeAdmin, controllers.api.v1.carController.delete);

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
