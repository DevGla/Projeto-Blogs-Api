'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostCategories',{
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'id',
        references: {
          model: 'BlogPost',
          key: 'id',
        },
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'id',
        references: {
          model: 'Category',
          key: 'id',
        },
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostCategories')
  }
};
