const User = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      displayName:{ 
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
        timestamps:false,
    });
    User.associate = (models) => {
      User.hasMany(models.BlogPost,
        { foreignKey: 'user_id', as: 'user' });
      };
    return User;
  };
  
  module.exports = User;