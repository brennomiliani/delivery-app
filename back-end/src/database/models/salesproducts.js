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
      tableName: 'sales_products',
      timestamps: false,
    });

  SaleProduct.associate = (models) => {
    // before ->
    // SaleProduct.belongsToMany(models.Sale,
    //   {
    //     as: 'sales',
    //     foreignKey: 'saleId',
    //     through: SaleProduct,
    //     otherKey: 'productId'
    //   });
    // SaleProduct.belongsToMany(models.Product,
    //   {
    //     as: 'products',
    //     foreignKey: 'productId',
    //     through: SaleProduct,
    //     otherKey: 'saleId'
    //   });

    // after changes (with the correct associations) ->
    models.Sale.belongsToMany(models.Product, {
      through: SaleProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
      as: 'products'
    });

    models.Product.belongsToMany(models.Sale, {
      through: SaleProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
      as: 'sales'
    });
  };
  return SaleProduct;
};