module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    sale_id: {
      type: DataTypes.INTEGER,
      field: 'sale_id'
    },
    productId: {
      type: DataTypes.INTEGER,
      field: 'product_id'
    },
    quantity: DataTypes.INTEGER,
  },
    {
      tableName: 'salesProducts',
      timestamps: false,
    });

  SaleProduct.associate = (models) => {
    SaleProduct.belongsTo(models.Sale, { foreignKey: 'id', as: 'sales' });
    SaleProduct.belongsTo(models.Product, { foreignKey: 'id', as: 'products' });
  };

  return SaleProduct;
}; 