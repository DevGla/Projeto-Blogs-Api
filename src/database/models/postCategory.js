module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.STRING, primaryKey: true
    },
    categoryId: {
      type: DataTypes.STRING, primaryKey: true
    }},
  {
      timestamps:false,
  });
  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost,
      { foreignKey: 'categoryId', as: 'BlogPosts', through: PostCategory, otherKey: 'postId' });
    models.BlogPost.belongsToMany(models.Category,
        { foreignKey: 'postId', as: 'categories', through: PostCategory, otherKey: 'categoryId' });
    };

  return PostCategory;
}