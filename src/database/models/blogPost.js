const BlogPost = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define("BlogPost", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING
      },
      content: {
        type: DataTypes.STRING
      },
      userId: {
        type: DataTypes.INTEGER
      },
      published: {
        type: DataTypes.STRING
      },
      updated: {
        type: DataTypes.STRING
      },
    },
    {
        timestamps:false,
    });
    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User,
        { foreignKey: 'userId', as: 'user' });
      };
  
    return BlogPost;
  };
  
  module.exports = BlogPost;