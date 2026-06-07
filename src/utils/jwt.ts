import jwt from "jsonwebtoken";
import { Role } from "@/types/role";

const JWT_SECRET = process.env.JWT_SECRET!;
// JWT_SECRET=e1db019ad605dba3

export interface JwtPayload {
    id: string;
    role: Role;
}

export const generateToken = (
    id: string,
    role: Role,
): string => {
    return jwt.sign({
        id,
        role,
    },JWT_SECRET,{
        expiresIn: '1h',
    });
};

export const verifyToken = (token: string): JwtPayload => {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
};
