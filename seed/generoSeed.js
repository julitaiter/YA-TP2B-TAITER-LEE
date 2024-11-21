import { Genero } from "../models/index.js";

async function generoSeed() {
  await Genero.bulkCreate([{ name: "Acción" }, { name: "Aventura" }, { name: "Drama" }, { name: "Suspenso" }]);
}

export default generoSeed;

