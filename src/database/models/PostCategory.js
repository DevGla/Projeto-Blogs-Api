const PostCategory = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define("PostCategory", {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published:DataTypes.STRING,
      updated:DataTypes.STRING,
    },
    {
        timestamps:false,
    });
    PostCategory.associate = (models) => {
      PostCategory.hasMany(models.PostCategory,
        { foreignKey: 'post_id', as: 'post' });
      };

    return PostCategory;
  };

  module.exports = PostCategory;