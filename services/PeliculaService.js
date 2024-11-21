import { Pelicula, Genero } from "../models/index.js";
import { verifyToken } from "../utils/token.js";

class PeliculaService {
  getAllPeliculasService = async () => {
    try {
      const data = await Pelicula.findAll({
        attributes: ["id", "titulo", "duracion", "sinopsis", "director", "estreno", "precio"],
        include: {
          model: Genero,
          attributes: ["id", "nombre"],
        },
      });
      return data;
    } catch (error) {
      console.error("Error en getAllPeliculasService:", error);
      throw error;
    }
  };

  getPeliculaByIdService = async (id) => {
    try {
      const data = await Pelicula.findByPk(id, {
        attributes: ["id", "titulo", "duracion", "sinopsis", "director", "estreno", "precio"],
        include: {
          model: Genero,
          attributes: ["id", "nombre"],
        },
      });
      if (!data) throw new Error("Película no encontrada");
      return data;
    } catch (error) {
      console.error("Error en getPeliculaByIdService:", error);
      throw error;
    }
  };

  createPeliculaService = async (peliData) => {
    try {
      const data = await Pelicula.create(peliData);
      return data;
    } catch (error) {
      console.error("Error en createPeliculaService:", error);
      throw error;
    }
  };

  updatePeliculaService = async (id, peliData) => {
    try {
      const pelicula = await Pelicula.findByPk(id);
      if (!pelicula) throw new Error("Película no encontrada");
      const updatedPelicula = await pelicula.update(peliData);
      return updatedPelicula;
    } catch (error) {
      console.error("Error en updatePeliculaService:", error);
      throw error;
    }
  };

  deletePeliculaService = async (id) => {
    try {
      const deletedRows = await Pelicula.destroy({
        where: { id },
      });
      if (!deletedRows) throw new Error("Película no encontrada");
      return { message: "Película eliminada con éxito" };
    } catch (error) {
      console.error("Error en deletePeliculaService:", error);
      throw error;
    }
  };

  me = async (token) => {
    try {
      const verify = verifyToken(token);
      return verify.data;
    } catch (error) {
      console.error("Error en me:", error);
      throw error;
    }
  };
}

export default PeliculaService;
