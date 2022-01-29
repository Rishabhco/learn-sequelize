module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },{
    timestamps: true,
    freezeTableName: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  });
  User.sync({ force: true });
  console.log('The table for the User model was just (re)created!');
  return User;
};
 
