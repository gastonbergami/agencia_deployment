import express from "express";
import {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimonio,
  paginaDetalleViaje,
} from "../controllers/paginaController.js";
import { guardarTestimonio } from "../controllers/testimonioController.js";

const router = express.Router();

router.get("/", paginaInicio);

router.get("/nosotros", paginaNosotros);

router.get("/viajes", paginaViajes);

router.get("/viajes/:slug", paginaDetalleViaje);

router.get("/testimonios", paginaTestimonio);
router.post("/testimonios", guardarTestimonio);

export default router;
