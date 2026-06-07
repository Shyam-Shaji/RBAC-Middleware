import { UserRepository } from "@/repositories/user.repository";

export class UserService {
    constructor(private userRepository: UserRepository) {}

    async getProfile(userId: string){
        return this.userRepository.getProfile(userId);
    }
}