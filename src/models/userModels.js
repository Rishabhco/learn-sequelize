module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      get(){
        return this.getDataValue("name")+this.email;
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      set(value) {
        this.setDataValue("email",value+' name');
      },
    },
    age: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },{
    timestamps: true,
    freezeTableName: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  });
  return User;
};
 
