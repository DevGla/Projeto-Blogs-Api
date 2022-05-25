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
      { foreignKey: 'categoryId', as: 'Categories', through: PostCategory, otherKey: 'postId' });
    models.BlogPost.belongsToMany(models.Category,
        { foreignKey: 'postId', as: 'BlogPosts', through: PostCategory, otherKey: 'categoryId' });
    };

  return PostCategory;
}