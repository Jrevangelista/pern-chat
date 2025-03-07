import  express  from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getMessages, getUsersForSidebar, sendMessage } from "../controller/messagecontroller.js";


const router = express.Router();

router.get("/conversations", protectRoute , getUsersForSidebar)
router.post("/send/:id", protectRoute , sendMessage)
router.get("/:id", protectRoute , getMessages)

export default router;