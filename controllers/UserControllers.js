import UserService from "../services/UserService.js";

class UserControllers {
  userService = new UserService();

  getAllUsers = async (req, res) => {
    try {
      const users = await this.userService.getAllUsersService();
      res.status(200).send({ success: true, message: users });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
  getUserById = (req, res) => {
    console.log(`🚀 ~ UserControllers ~ res:`, res)
    console.log(`🚀 ~ UserControllers ~ req:`, req)
    const user = this.userService.getUserByIdService();
    res.status(200).send(user);
  };
  createUser = async (req, res) => {
    try {
      const { name, pass, mail, RoleId } = req.body;
      const user = await this.userService.createUserService({
        name,
        pass,
        mail,
        RoleId,
      });
      res.status(200).send({ success: true, message: user });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
  updateUser = (req, res) => {
    const user = this.userService.updateUserService();
    res.status(200).send(user);
  };
  deleteUser = (req, res) => {
    const user = this.userService.deleteUserService();
    res.status(200).send(user);
  };
  login = async (req, res) => {
    try {
      const { pass, mail } = req.body;
      const user = await this.userService.loginUserService({
        pass,
        mail,
      });
      // console.log(`🚀 ~ UserControllers ~ login= ~ user:`, user)
      res.cookie("token", user)


      res.status(200).send({ success: true, message: "usario loguado con exito" });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
  getMe = async (req, res) => {
    try {
      const { token } = req.cookies;
      // console.log(`🚀 ~ UserControllers ~ getMe= ~ token:`, token)
      const user = await this.userService.me(token);
      // console.log(`🚀 ~ UserControllers ~ login= ~ user:`, user)

      res.status(200).send({ success: true, message: user});
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
}

export default UserControllers;
