import { UserInterface } from '@/interface/UserInterface';
import { Inject, Service } from 'typedi';

@Service()
export default class AuthService {
  constructor(@Inject('userModel') private userModel: Models.UserModel) {}

  public async findUser() {
    console.log(this.userModel);
    const userInstance = await this.userModel.find();
    return userInstance;
  }

  public async registerUser(user: UserInterface) {
    const { fname, lname, email, password } = user;

    try {
      const data = this.userModel.create({
        fname: fname,
        lname: lname,
        email: email,
        password: password,
      });
      return data;
    } catch (error) {
      error['message'] = new Error('Cant register the user');
      error['status'] = 404;
      throw error;
      return -1;
    }
  }
}
