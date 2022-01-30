const db = require("../db/db");
const Users = db.users;

const home = (req, res) => {
  try {
    console.log("Welcome to the home page");
    res.status(200).send("Welcome to the home page");
  } catch (error) {
    console.log(error);
    res.status(400).send("error");
  }
};

const createUser = async (req, res) => {
  try {
    // let data = Users.build({
    //   name: req.body.name,
    //   email: req.body.email,
    //   age: req.body.age,
    // });
    // await data.save();
    let data =await  Users.create({
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    });
    res.status(200).send({
      message: "User Created",
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      message: "Error has occured",
      error: error,
    });
  }
};

module.exports = {
  home,
  createUser,
};
