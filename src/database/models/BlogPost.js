const BlogPost = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define("BlogPost", {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published:DataTypes.STRING,
      updated:DataTypes.STRING,
    },
    {
        timestamps:false,
    });
    BlogPost.associate = (models) => {
      BlogPost.hasMany(models.PostCategory,
        { foreignKey: 'post_id', as: 'post' });
      };
  
    return BlogPost;
  };
  
  module.exports = BlogPost;