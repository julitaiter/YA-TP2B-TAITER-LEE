import GeneroService from "../services/GeneroService.js";
import { verifyToken } from "../utils/token.js";

class GeneroController {
    GeneroService = new GeneroService();

    getAllGeneros = async (req, res) => {
        try {
            const generos = await this.GeneroService.getAllGenerosService();
            res.status(200).send({ success: true, data: generos });
        } catch (error) {
            res.status(400).send({
                success: false,
                message: error.message,
            });
        }
    };

    createGenero = async (req, res) => {
        try {
            const { nombre } = req.body;

            if (!nombre) {
                return res.status(400).send({
                    success: false,
                    message: "El campo 'nombre' es obligatorio",
                });
            }

            const genero = await this.GeneroService.createGeneroService({ nombre });
            res.status(201).send({ success: true, data: genero });
        } catch (error) {
            res.status(400).send({
                success: false,
                message: error.message,
            });
        }
    };

    deleteGenero = async (req, res) => {
        try {
            const { id } = req.params;

            const result = await this.GeneroService.deleteGeneroService(id);
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

            const user = await this.GeneroService.getMe(token, verifyToken);
            res.status(200).send({ success: true, data: user });
        } catch (error) {
            res.status(400).send({
                success: false,
                message: error.message,
            });
        }
    };
}

export default GeneroController;
