import { Request, Response, NextFunction } from "express";
import { verifyToken } from "@/utils/jwt";
import { Role } from "@/types/role";

export const authenticate = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    try {
        const authHeader = req.headers.authorization;

    if(!authHeader?.startsWith('Bearer ')){
        res.status(401).json({
            success: false,
            message: 'Unauthorized',
        });
        return;
    }

    const token = authHeader.split(" ")[1];

    const payload = verifyToken(token);

    // if(!token){
    //     res.status(401).json({
    //         success: false,
    //         message: "Invalid token",
    //     });
    //     return;
    // }

    req.user = {
        id: payload.id,
        role: payload.role,
    };

    next();
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Invalid token",
        });
    }
};