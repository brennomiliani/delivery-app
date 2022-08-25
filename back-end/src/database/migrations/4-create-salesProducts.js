'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('salesProducts', {
      saleId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'sales',
          key: 'id',
        },
        field: 'sale_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id',
        },
        field: 'product_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('salesProducts');
  }
}; 