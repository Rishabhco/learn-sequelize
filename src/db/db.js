const { Sequelize,Model,DataTypes } = require("sequelize");
const secrets=require('../../secrets');

const sequelize = new Sequelize(secrets.database, secrets.username, secrets.password, {
  host: secrets.host,
  dialect: "postgres",
  logging:true
});

sequelize.authenticate().then(() => {
   console.log("Connection has been established successfully.");
}).catch (error => {
   console.error("Unable to connect to the database:", error);
})

let db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;
db.users=require('../models/userModels')(sequelize,DataTypes);
db.posts=require('../models/postsModels')(sequelize,DataTypes);


//ONE--TO--ONE RELATIONSHIP
db.users.hasOne(db.posts,{foreignKey:'user_id',as:"postDetails"});

//ONE--TO--MANY RELATIONSHIP
// db.users.hasMany(db.posts,{foreignKey:'user_id',as:"postDetails"});

db.posts.belongsTo(db.users,{foreignKey:'user_id',as:"userDetails"});

//MANY--TO--MANY RELATIONSHIP  (posts and tags are two different tables) and posts_tags is a differnet table which will have postId and tagId
// db.posts.belongsToMany(db.tags,{through:db.posts_tags});
// db.tags.belongsToMany(db.posts,{through:db.posts_tags});

db.sequelize.sync({force:false}).then(()=>{
  console.log("Database has been synced");
}).catch(err=>{
  console.log("Error in syncing database");
});

module.exports=db;