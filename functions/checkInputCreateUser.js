function checkInputCreateUser(name, email, age, password) {

  if (!name || !email || !age || !password) {
    return false;
  }
  if (name.length < 3 || name.length > 50) {
    console.log("nombre incorrecto en checkInputCreateUser");
    return false;
  }
  if (email.length < 5 || email.length > 50) {
    console.log("email incorrecto en checkInputCreateUser");
    return false;
  }
  if (password.length < 8 || password.length > 50) {
    console.log("password incorrecto en checkInputCreateUser");
    return false;
  }
  if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string' || typeof age !== 'number') {
    console.log("type error en checkInputCreateUser");
    return false;
  }
  if (age < 0 || age > 120) {
    console.log("edad absurda en checkInputCreateUser");
    return false;
  }

  return true;
}

module.exports = checkInputCreateUser;