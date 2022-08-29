module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: 'sale_id'
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: 'product_id'
    },
    quantity: DataTypes.INTEGER,
  },
    {
      tableName: 'salesProducts',
      timestamps: false,
    });
  SaleProduct.associate = (models) => {
    SaleProduct.belongsToMany(models.Sale,
      {
        as: 'sales',
        foreignKey: 'saleId',
        through: SaleProduct,
        otherKey: 'productId'
      });
    SaleProduct.belongsToMany(models.Product,
      {
        as: 'products',
        foreignKey: 'productId',
        through: SaleProduct,
        otherKey: 'saleId'
      });
  };
  return SaleProduct;
};