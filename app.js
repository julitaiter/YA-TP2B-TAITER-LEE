import express from "express";
import routes from "./routes/routes.js";
import connection from "./connection/connection.js";
import { SERVER_PORT } from "./config/config.js";
import roleSeed from "./seed/roleSeed.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use("/app", routes);

app.use((req, res, next) => {
  res.status(404).send({
    success: false,
    message: "not found",
  });
});


await connection.sync({ force: false});

await roleSeed()

app.listen(SERVER_PORT, () => {
  console.log(`🚀 ~ app.listen ~ localhost:${SERVER_PORT}`);
});
