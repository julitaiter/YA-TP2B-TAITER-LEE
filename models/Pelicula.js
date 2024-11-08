import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Pelicula extends Model {}

Pelicula.init(
  {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genero_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    duracion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sinopsis: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estreno: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "Pelicula",
  }
);

export default Pelicula;
