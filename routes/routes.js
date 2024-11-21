import { Router } from "express";
import userRoutes from "./userRoutes.js";
import peliculaRoutes from "./peliculaRoutes.js";
import generoRoutes from "./generoRoutes.js";
import alquilerRoutes from "./alquilerRoutes.js";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/pelicula", peliculaRoutes);
routes.use("/genero", generoRoutes);
routes.use("/alquiler", alquilerRoutes);
// routes.use("/roles",rolesRoutes);


export default routes;
