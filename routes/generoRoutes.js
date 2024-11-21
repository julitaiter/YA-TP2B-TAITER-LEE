import express from "express";
import GeneroController from "../controllers/GeneroControllers.js";

const generoRouter = express.Router();
const generoController = new GeneroController();

// Rutas de Genero
generoRouter.get("/", generoController.getAllGeneros);
generoRouter.post("/", generoController.createGenero);
generoRouter.delete("/:id", generoController.deleteGenero);
generoRouter.get("/me", generoController.getMe);

export default generoRouter;
