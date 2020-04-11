import cors from "cors";
import { Router } from "express";

export const handleCors = (router: Router) =>
  router.use(cors({ credentials: true, origin: true }));