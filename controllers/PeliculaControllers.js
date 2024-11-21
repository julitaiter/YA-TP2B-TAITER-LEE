import PeliculaService from "../services/PeliculaService.js";

class PeliculaControllers {
  PeliculaService = new PeliculaService();

  getAllPeliculas = async (req, res) => {
    try {
      const peliculas = await this.PeliculaService.getAllPeliculasService();
      res.status(200).send({ success: true, data: peliculas });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  getPeliculaById = async (req, res) => {
    try {
      const { id } = req.params;
      const pelicula = await this.PeliculaService.getPeliculaByIdService(id);
      res.status(200).send({ success: true, data: pelicula });
    } catch (error) {
      res.status(404).send({
        success: false,
        message: error.message,
      });
    }
  };

  createPelicula = async (req, res) => {
    try {
      const { titulo, genero_id, duracion, sinopsis, director, estreno, precio } = req.body;

      // Validar que todos los campos requeridos estén presentes
      if (!titulo || !genero_id || !duracion || !sinopsis || !director || !estreno || !precio) {
        return res.status(400).send({
          success: false,
          message: "Todos los campos son obligatorios",
        });
      }

      const pelicula = await this.PeliculaService.createPeliculaService({
        titulo,
        genero_id,
        duracion,
        sinopsis,
        director,
        estreno,
        precio,
      });

      res.status(201).send({ success: true, data: pelicula });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  updatePelicula = async (req, res) => {
    try {
      const { id } = req.params;
      const peliData = req.body;

      const pelicula = await this.PeliculaService.updatePeliculaService(id, peliData);
      res.status(200).send({ success: true, data: pelicula });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  deletePelicula = async (req, res) => {
    try {
      const { id } = req.params;

      const result = await this.PeliculaService.deletePeliculaService(id);
      res.status(200).send({ success: true, message: result });
    } catch (error) {
      res.status(404).send({
        success: false,
        message: error.message,
      });
    }
  };

  getMe = async (req, res) => {
    try {
      const { token } = req.cookies;

      if (!token) {
        return res.status(401).send({
          success: false,
          message: "Token no proporcionado",
        });
      }

      const user = await this.PeliculaService.me(token);
      res.status(200).send({ success: true, data: user });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
}

export default PeliculaControllers;
