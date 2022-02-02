module.exports = (sequelize, DataTypes) => {
    const Posts=sequelize.define('posts', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            body: {
                type: DataTypes.STRING,
                allowNull: false
            },
            user_id: {
                type: DataTypes.UUID,
                allowNull: false
            }
        }, {
            timestamps: true,
            freezeTableName: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        });
    return Posts;
};