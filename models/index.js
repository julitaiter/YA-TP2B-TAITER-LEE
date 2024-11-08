import Alquiler from "./Alquiler.js";
import Genero from "./Genero.js";
import Pelicula from "./Pelicula.js";
import Role from "./Role.js";
import User from "./User.js";

Role.hasMany(User)
User.belongsTo(Role)

Genero.hasMany(Pelicula)
Pelicula.belongsTo(Genero)

Pelicula.hasMany(Alquiler)
User.hasMany(Alquiler)
Alquiler.belongsTo(Pelicula)
Alquiler.belongsTo(User)

export { Pelicula, Genero, User, Alquiler };
