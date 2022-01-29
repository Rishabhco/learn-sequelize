const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("blogSys", "postgres", "system", {
  host: "localhost",
  dialect: "postgres",
});

sequelize.authenticate().then(() => {
   console.log("Connection has been established successfully.");
}).catch (error => {
   console.error("Unable to connect to the database:", error);
})

const db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;
db.users=require('../models/userModels')(sequelize,Sequelize);

module.export=sequelize