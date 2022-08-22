module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(4, 2),
    urlImage: DataTypes.INTEGER,
  },
    {
      tableName: 'Products',
      timestamps: false,
      underscored: true,
    });

  Product.associate = (models) => {
    Product.hasMany(models.SaleProduct, { foreignKey: 'productId', as: 'products' });
  };

  return Product;
}; 