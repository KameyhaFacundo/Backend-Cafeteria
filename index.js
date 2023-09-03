import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config"; //Permite procesar variables de entorno
import productoRouter from "./src/routes/productos.routes.js";
import usuarioRouter from "./src/routes/usuarios.routes.js";

// 1 - configuraciones iniciales
const app = express();
// creo una variable con express

app.set("port", process.env.PORT || 4000); // el puerto de mi servidor es el mismo
app.listen(app.get("port"), () => {
  console.log("Estoy en el puerto " + app.get("port"));
});

// 2 - middlewares: funciones se agregan antes de las rutas

app.use(cors()); //permite conexiones remotas
app.use(express.json()); //permite interpretar formato json
app.use(express.urlencoded({ extended: true })); //ayuda a interpretar datos del body del request
app.use(morgan("dev")); // Nos da mas informacion en la terminal

// 3 - crear las rutas
// htpp://localhost:4000/api/producto
app.use("/api", productoRouter);
app.use("/api", usuarioRouter);
