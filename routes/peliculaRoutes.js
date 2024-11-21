import express from "express";
import PeliculaControllers from "../controllers/PeliculaControllers.js";

const peliculaRouter = express.Router();
const peliculaController = new PeliculaControllers();

peliculaRouter.get("/", peliculaController.getAllPeliculas);
peliculaRouter.get("/:id", peliculaController.getPeliculaById);
peliculaRouter.post("/", peliculaController.createPelicula);
peliculaRouter.put("/:id", peliculaController.updatePelicula);
peliculaRouter.delete("/:id", peliculaController.deletePelicula);

export default peliculaRouter;
