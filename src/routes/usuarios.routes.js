import { Router } from "express";
import { listarUsuarios } from "../controllers/usuario.controllers.js";

const router = Router();

router.route("/login").get(listarUsuarios);

export default router;
