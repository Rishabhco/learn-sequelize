const { Sequelize,Model,DataTypes } = require("sequelize");
const secrets=require('../../secrets');

const sequelize = new Sequelize(secrets.database, secrets.username, secrets.password, {
  host: secrets.host,
  dialect: "postgres",
  logging:false
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

db.sequelize.sync({force:false}).then(()=>{
  console.log("Database has been synced");
}).catch(err=>{
  console.log("Error in syncing database");
});

module.exports=db;