import AlquilerService from "../services/AlquilerService.js";

class AlquilerController {
    AlquilerService = new AlquilerService();

    getAllAlquileres = async (req, res) => {
        try {
            const alquileres = await this.AlquilerService.getAllAlquileresService();
            res.status(200).send({ success: true, data: alquileres });
        } catch (error) {
            res.status(400).send({
                success: false,
                message: error.message,
            });
        }
    };

    getAlquilerById = async (req, res) => {
        try {
            const { id } = req.params;
            const alquiler = await this.AlquilerService.getAlquilerByIdService(id);
            res.status(200).send({ success: true, data: alquiler });
        } catch (error) {
            res.status(404).send({
                success: false,
                message: error.message,
            });
        }
    };

    createAlquiler = async (req, res) => {
        try {
            const { fecha, vencimiento, pelicula_id, user_id } = req.body;

            if (!fecha || !vencimiento || !pelicula_id || !user_id) {
                return res.status(400).send({
                    success: false,
                    message: "Todos los campos son obligatorios",
                });
            }

            const alquiler = await this.AlquilerService.createAlquilerService({
                fecha,
                vencimiento,
                pelicula_id,
                user_id,
            });
            res.status(201).send({ success: true, data: alquiler });
        } catch (error) {
            res.status(400).send({
                success: false,
                message: error.message,
            });
        }
    };

    updateAlquiler = async (req, res) => {
        try {
            const { id } = req.params;
            const alquilerData = req.body;

            const updatedAlquiler = await this.AlquilerService.updateAlquilerService(
                id,
                alquilerData
            );
            res.status(200).send({ success: true, data: updatedAlquiler });
        } catch (error) {
            res.status(400).send({
                success: false,
                message: error.message,
            });
        }
    };

    deleteAlquiler = async (req, res) => {
        try {
            const { id } = req.params;

            const result = await this.AlquilerService.deleteAlquilerService(id);
            res.status(200).send({ success: true, message: result });
        } catch (error) {
            res.status(404).send({
                success: false,
                message: error.message,
            });
        }
    };
}

export default AlquilerController;
