const { Sequelize, Op, QueryTypes } = require("sequelize");
const db = require("../db/db");
const Posts = db.posts;
const Users = db.users;

const createPosts = async (req, res) => {
  try {
      console.log("1");
      let postsData = await Posts.create({ ...req.body });
      console.log("2");
    res.status(200).send({
      message: "Post created",
      data: postsData.toJSON(),
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "Error has occured",
      error,
    });
  }
};

const findAllPosts = async (req, res) => {
  try {
    let postsData = await Posts.findAll();
    res.status(200).send({
      message: "Posts found",
      data: postsData,
    });
  } catch (error) {
    res.status(400).send({
      message: "Error has occured",
      error,
    });
  }
};

const belongsToUser = async (req, res) => {
  try {
    let belongsToUserDetails=await Posts.findAll({
        include:[{
          model:Users,
          attributes:['uuid','name','email']
        }],
        where:{
          id:req.body.id,
        }
      })
       res.status(200).send({
          "message":"Post And User Details",
          data:belongsToUserDetails,
       })
  } catch (error) {
    res.status(400).send({
      message: "Error has occured",
      error,
    });
  }
};

module.exports = {
  createPosts,
  findAllPosts,
  belongsToUser,
};
