import { Request, Response, NextFunction } from "express";
import { Role } from "@/types/role";

export const authenticate = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const authHeader = req.headers.authorization;

    if(!authHeader?.startsWith('Bearer ')){
        res.status(401).json({
            success: false,
            message: 'Unauthorized',
        });
        return;
    }

    const token = authHeader.split(" ")[1];

    if(!token){
        res.status(401).json({
            success: false,
            message: "Invalid token",
        });
        return;
    }

    req.user = {
        id: 'user_123',
        role: Role.CONTRIBUTOR,
    };

    next();
}