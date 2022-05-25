module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", {
    postId: {
      type: DataTypes.STRING
    },
    categoryId: {
      type: DataTypes.STRING
    }},
  {
      timestamps:false,
  });
  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost,
      { foreignKey: 'category_id', as: 'categories', through: PostCategory, otherKey: 'post_id' });
    models.BlogPost.belongsToMany(models.Category,
        { foreignKey: 'post_id', as: 'blogposts', through: PostCategory, otherKey: 'category_id' });
    };

  return PostCategory;
}