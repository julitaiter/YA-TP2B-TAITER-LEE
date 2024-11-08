import { Pelicula, Genero } from "../models/index.js";
import { genToken, verifyToken } from "../utils/token.js";

class PeliculaService {
  getAllPeliculasService = async () => {
    try {
      const data = await Pelicula.findAll({
        attributes: ["name"],
        include: Genero,
      });
      return data;
    } catch (error) {
      throw error;
    }
  };
  getPeliculaByIdService = (id) => {
    return "get peli by id service";
  };
  createPeliculaService = async (peliData) => {
    try {
      const data = await Pelicula.create(peliData);
      return data;
    } catch (error) {
      throw error;
    }
  };
  updatePeliculaService = (id) => {
    return "update peli service";
  };
  deletePeliculaService = (id) => {
    return "delete peli service";
  };
  loginPeliculaService = async (peli) => {
    try {
      const { pass, mail } = peli;
      const data = await Pelicula.findOne({ where: { mail } });
      if (!data) throw new Error("Pelicula not found");

      const comparePass = await data.compare(pass);
      if (!comparePass) throw new Error("Pelicula not found");

      const payload = {
        id: data.id,
        mail: data.mail,
      };

      const token = genToken(payload);
      // console.log(`🚀 ~ PeliculaService ~ loginPeliculaService= ~ token:`, token)

      return token;
    } catch (error) {
      throw error;
    }
  };

  me = async (token) => {
    try {
      const verify = verifyToken(token);
      return verify.data;
    } catch (error) {
      throw error;
    }
  };
}

export default PeliculaService;
