import { Router } from "express";

import {
    home,
    lorem,
    hb1,
    hb2,
    hb3,
    hb4
} from "../controllers/mainController";

import produtoRoutes from "./produtoRoutes";

const router = Router();

router.get("/", home);

router.get(
    "/lorem/:qtd",
    lorem
);

router.get("/hb1", hb1);

router.get("/hb2", hb2);

router.get("/hb3", hb3);

router.get("/hb4", hb4);

router.use(
    "/produtos",
    produtoRoutes
);

export default router;