import { Alquiler } from "../models/index.js";

class AlquilerService {
    getAllAlquileresService = async () => {
        try {
            const alquileres = await Alquiler.findAll();
            return alquileres;
        } catch (error) {
            console.error("Error en getAllAlquileresService:", error);
            throw error;
        }
    };

    getAlquilerByIdService = async (id) => {
        try {
            const alquiler = await Alquiler.findByPk(id);
            if (!alquiler) throw new Error("Alquiler no encontrado");
            return alquiler;
        } catch (error) {
            console.error("Error en getAlquilerByIdService:", error);
            throw error;
        }
    };

    createAlquilerService = async (alquilerData) => {
        try {
            const alquiler = await Alquiler.create(alquilerData);
            return alquiler;
        } catch (error) {
            console.error("Error en createAlquilerService:", error);
            throw error;
        }
    };

    updateAlquilerService = async (id, alquilerData) => {
        try {
            const alquiler = await Alquiler.findByPk(id);
            if (!alquiler) throw new Error("Alquiler no encontrado");
            const updatedAlquiler = await alquiler.update(alquilerData);
            return updatedAlquiler;
        } catch (error) {
            console.error("Error en updateAlquilerService:", error);
            throw error;
        }
    };

    deleteAlquilerService = async (id) => {
        try {
            const deletedRows = await Alquiler.destroy({
                where: { id },
            });
            if (!deletedRows) throw new Error("Alquiler no encontrado");
            return { message: "Alquiler eliminado con éxito" };
        } catch (error) {
            console.error("Error en deleteAlquilerService:", error);
            throw error;
        }
    };
}

export default AlquilerService;
