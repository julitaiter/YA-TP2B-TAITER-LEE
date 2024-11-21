import express from "express";
import AlquilerController from "../controllers/AlquilerController.js";

const alquilerRouter = express.Router();
const alquilerController = new AlquilerController();

alquilerRouter.get("/", alquilerController.getAllAlquileres);
alquilerRouter.get("/:id", alquilerController.getAlquilerById);
alquilerRouter.post("/", alquilerController.createAlquiler);
alquilerRouter.put("/:id", alquilerController.updateAlquiler);
alquilerRouter.delete("/:id", alquilerController.deleteAlquiler);

export default alquilerRouter;
