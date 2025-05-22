const {db} = require("../db/sequelize");

async function checkExistUser(email) {
  const user = await db.User.findOne({ where: { email } });
  console.log("user: ", user);

  if (user?.email) {
    return true;
  } else {
    return false;
  }
}

module.exports = checkExistUser;