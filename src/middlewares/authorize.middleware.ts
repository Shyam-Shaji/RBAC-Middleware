import { Request, Response, NextFunction } from "express";
import { Role } from "@/types/role";

export const authorize = (allowedRoles: Role[]) => {
    return(
        req: Request,
        res: Response,
        next: NextFunction
    ): void => {
        if(!req.user){
            res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
            return;
        }
        if(!allowedRoles.includes(req.user.role)){
            res.status(403).json({
                success: false,
                message: "Forbidden",
            });
            return;
        }
        next();
    };
};