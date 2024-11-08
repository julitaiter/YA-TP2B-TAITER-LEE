import { User, Role } from "../models/index.js";
import { genToken, verifyToken } from "../utils/token.js";

class UserService {
  getAllUsersService = async () => {
    try {
      const data = await User.findAll({
        attributes: ["name"],
        include: Role,
      });
      return data;
    } catch (error) {
      throw error;
    }
  };
  getUserByIdService = (id) => {
    return "get user by id service";
  };
  createUserService = async (userData) => {
    try {
      const data = await User.create(userData);
      return data;
    } catch (error) {
      throw error;
    }
  };
  updateUserService = (id) => {
    return "update user service";
  };
  deleteUserService = (id) => {
    return "delete user service";
  };
  loginUserService = async (user) => {
    try {
      const { pass, mail } = user;
      const data = await User.findOne({ where: { mail } });
      if (!data) throw new Error("User not found");

      const comparePass = await data.compare(pass);
      if (!comparePass) throw new Error("User not found");

      const payload = {
        id: data.id,
        mail: data.mail,
      };

      const token = genToken(payload);
      // console.log(`🚀 ~ UserService ~ loginUserService= ~ token:`, token)

      return token;
    } catch (error) {
      throw error;
    }
  };

  me = async (token) => {
    try {
      const verify = verifyToken(token);
      return verify.data;
    } catch (error) {
      throw error;
    }
  };
}

export default UserService;
