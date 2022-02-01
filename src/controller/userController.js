const { Sequelize, Op } = require("sequelize");
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

    let data = await Users.create({
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
    // Fid One User only
    // let data=await Users.findOne({});

    //Find All the users by changing column name or getting limited amount of columns
    let data = await Users.findAll({
      attributes: ["name", "email", ["age", "user_age"]],
    });

    //Find the total no of email of Users in the db by using functions
    // let data =await Users.findAll({
    //   attributes:[
    //     [Sequelize.fn('Count',Sequelize.col('email')),'total_emails']
    //   ]
    // });

    //Using include and exclude
    // let data=await Users.findAll({
    //   attributes:{
    //    exclude:['created_at','updated_at'],
    //    include:[[Sequelize.fn('Concat',Sequelize.col('name'),' Singh'),'full_name']]
    //   }
    // })

    //Using Conditions
    //  let data=await Users.findAll({
    //   where:{
    //     name:'Ramesh',
    //     email:{
    //       [Op.like]:'%@gmail.com%'
    //     }
    //   },
    //   order:[
    //     ["name", 'DESC'],
    //     ["email" ,"DESC"]
    //   ],
    //   group:['name','email'],
    //   limit:2,
    //   offset:1,
    // });

    // Count the number of users in database directly
    // let data=await Users.count();

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

const findData = async (req, res) => {
  try {
    // Find one User
    // let data=await Users.findOne({});
    
    // Find all users
    // let data=await Users.findAll({});

     // Find User by primary key
    // let data=await Users.findByPk();

    // Find the user by name and if not found then create a new user with that name and details
    // let [data, created] = await Users.findOrCreate({
    //   where: { name: req.body.name },
    //   defaults: {
    //     ...req.body,
    //   },
    // });


    // Find the users with particular name and count the total no of users with that name
    // let data =await  Users.findAndCountAll({
    //   where: { name: "Ramesh" },
    // });
    
    res.status(200).send({
      message: "User Created or found",
      data: data,
      add: created,
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
    let data = await Users.update(
      {
        ...req.body,
      },
      {
        where: {
          uuid: req.params.id,
        },
      }
    );

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
    let data = await Users.destroy({
      where: {
        uuid: req.params.id,
      },
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
  findAllUser,
  findData
};
