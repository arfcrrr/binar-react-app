const { User } = require("../models");

module.exports = {
  register(data) {
    // set default user's role as a member
    User.addHook("beforeCreate", (user) => {
      user.role = "member";
    });

    return User.create(data);
  },

  addAdmin(id) {
    User.update({ role: "admin" }, { where: { id } });
  },

  findByEmail(email) {
    return User.findOne({
      where: { email }
    });
  },

  findByPk(id) {
    return User.findByPk(id);
  },


};
