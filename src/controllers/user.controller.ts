import { Request, Response } from "express";
import { UserService } from "@/services/user.service";
import { UserRepository } from "@/repositories/user.repository";

const userService = new UserService( new UserRepository());

export class UserController{
    async getProfile(req: Request, res: Response){
        const profile = await userService.getProfile(req.user!.id);
        res.status(200).json({
            success: true,
            data: profile
        });
    }

    async createContent(req: Request, res: Response){
        res.status(201).json({
            success: true,
            message: "Content created successfully",
        });
    }

    async deleteSystem(req: Request, res: Response){
        res.status(200).json({
            success: true,
            message: "System deleted successfully",
        });
    }
}