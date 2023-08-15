import { Router } from "./router.js";

const router = new Router();

router.add("/", "/pages/home.html");
router.add("/universe", "/pages/universe.html");
router.add("/exploracao", "/pages/exploracao.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();
