export class UserRepository{
    async getProfile(userId: string){
        return {
            id: userId,
            name: 'John Doe',
            role: 'CONTRIBUTOR',
        }
    }
}