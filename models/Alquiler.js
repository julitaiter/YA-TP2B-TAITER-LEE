import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Alquiler extends Model { }

Alquiler.init(
  {
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    vencimiento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    pelicula_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "Alquiler",
  }
);

export default Alquiler;
