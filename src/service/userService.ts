import  User  from '../models/userModel';
class UserService {

    async sendNotificationToUser() {
        return await User.find();
    }

}

const userService = new UserService();
export default userService;