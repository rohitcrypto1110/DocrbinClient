import express from "express";
const router = express.Router();

import { getShortUrl, getUrlData } from "../controllers/url.js";

router.post("/getShortUrl", getShortUrl);
router.post("/getUrlData", getUrlData);

export default router;