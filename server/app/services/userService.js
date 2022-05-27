const userRepository = require("../repositories/userRepository");
const authService = require("./authService");

module.exports = {
  async register(data) {
    data.password = await authService.encryptPassword(data.password);
    return userRepository.register(data);
  },

  async login(data) {
    data.email = data.email.toLowerCase();
    
    const user = await userRepository.findByEmail(data.email);

    if (!user) {
      throw new Error("User Not Found! Please check your email and try again.");
    }

    const isPasswordCorrect = await authService.checkPassword(
      user.password,
      data.password
    );

    if (!isPasswordCorrect) {
      throw new Error("Password Incorrect! Please check your password and try again.")
    }

    const token = await authService.createToken({
      id: user.id,
      email: data.email,
      password: data.password
    })

    return {
      id: user.id,
      email: data.email,
      role: user.role,
      token
    }
  },

  async addAdmin(id) {
    userRepository.addAdmin(id);
    const user = await userRepository.findByPk(id);
    return {
      id: user.id,
      email: user.email,
      role: user.role,
    }
  }


};
