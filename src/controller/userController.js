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

    // TO CREATE THE USERS IN BULK AMOUNT USE bulkCreate() method.

    // To allow only some fields to be inserted in database.

    // let data =await  Users.create({
    //  ...req.body
    // },{
    //   fields:['name','email']
    // });

    res.status(200).send({
      message: "User Created",
      data: data.toJSON(),
    });
  } catch (error) {
    res.status(400).send({
      message: "Error has occured",
      error: error,
    });
  }
};

const findAllUser = async (req, res) => {
    try {
        let data =await Users.findAll({});
        res.status(200).send({
            message: "User List",
            data: data,
        });
    } catch (error) {
      res.status(400).send({
        message: "Error has occured",
        error: error,
      });
    }
  };

const updateUser = async (req, res) => {
  try {
    let data =await Users.update({
      ...req.body
    },{
        where:{
            uuid:req.params.id
        }
    });

    res.status(200).send({
      message: "User Updated",
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      message: "Error has occured",
      error: error,
    });
  }
};


const deleteUser = async (req, res) => {
  try {
    let data =await  Users.destroy({
        where:{
            uuid:req.params.id
        }
    });

    res.status(200).send({
      message: "User Deleted",
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
  updateUser,
  deleteUser,
  findAllUser
};
