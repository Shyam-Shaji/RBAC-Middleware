import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { authorize } from "../middlewares/authorize.middleware";
import { Role } from "../types/role";

const router = Router();
const controller = new UserController();

router.get("/profile", authenticate, controller.getProfile);
router.post("/content", authenticate, authorize([Role.ADMIN, Role.EDITOR]), controller.createContent);
router.delete("/system", authenticate, authorize([Role.ADMIN]), controller.deleteSystem);

export default router;