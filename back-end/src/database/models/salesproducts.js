module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  },
    {
      tableName: 'SalesProducts',
      timestamps: false,
      underscored: true,
    });

  SaleProduct.associate = (models) => {
    SaleProduct.belongsTo(models.Sale, { foreignKey: 'id', as: 'sales' });
    SaleProduct.belongsTo(models.Product, { foreignKey: 'id', as: 'products' });
  };

  return SaleProduct;
}; 