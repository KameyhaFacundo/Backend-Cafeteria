import express from "express";

// 1 - configuraciones iniciales
const app = express();
// creo una variable con express

app.set("port", process.env.PORT || 4000); // el puerto de mi servidor es el mismo

// 2 - middlewares

// 3 - crear las rutas
