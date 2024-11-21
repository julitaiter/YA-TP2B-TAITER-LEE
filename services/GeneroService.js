import { Genero } from "../models/index.js";

class GeneroService {
    getAllGenerosService = async () => {
        try {
            const generos = await Genero.findAll({
                attributes: ["id", "nombre"],
            });
            return generos;
        } catch (error) {
            console.error("Error en getAllGenerosService:", error);
            throw error;
        }
    };

    createGeneroService = async (generoData) => {
        try {
            const genero = await Genero.create(generoData);
            return genero;
        } catch (error) {
            console.error("Error en createGeneroService:", error);
            throw error;
        }
    };

    deleteGeneroService = async (id) => {
        try {
            const deletedRows = await Genero.destroy({
                where: { id },
            });
            if (!deletedRows) throw new Error("Género no encontrado");
            return { message: "Género eliminado con éxito" };
        } catch (error) {
            console.error("Error en deleteGeneroService:", error);
            throw error;
        }
    };

    getMe = async (token, verifyToken) => {
        try {
            const verify = verifyToken(token); // Verificar el token
            return verify.data;
        } catch (error) {
            console.error("Error en getMe:", error);
            throw error;
        }
    };
}

export default GeneroService;
