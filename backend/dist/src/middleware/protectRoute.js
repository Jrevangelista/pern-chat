import jwt from "jsonwebtoken";
import prisma from "../db/prisma.js";
const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No token Provided" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized - Invalid token" });
        }
        const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
            select: { id: true, userName: true, fullname: true, profilePic: true }
        });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        req.user = user;
        next();
    }
    catch (error) {
        console.log("Error in protecttRoute Middleware", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
export default protectRoute;
