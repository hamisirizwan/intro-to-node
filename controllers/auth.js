//import the mongoose schema

const login = async (req, res) => {
  const { email, password, username } = req.body;

  //validate inputs

  //check for existing user in the Model
  const user = await checkuser();

  if (user === null) {
    return res.status(404).json("user not found");
  }

  //validate password

  //   use bycryp to compare the password  and the user.password

  // jwt
  //  generate jwt token

  //send back the user and the token

  res.json({ message: "login successful", token: token, user: user });
};

const register = async (req, res) => {
  const { email, password, username } = req.body;
  //validate the body

  //hashing password
  //  bycrypt - hashing password

  //save to db
};

module.exports = {
  login,
  register,
};
