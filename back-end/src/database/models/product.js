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
    urlImage: {
      type: DataTypes.INTEGER,
      field: 'url_image'
    },
  },
    {
      tableName: 'products',
      timestamps: false,
      underscored: true,
    });

  Product.associate = (models) => {
    Product.belongsTo(models.SaleProduct, { foreignKey: 'productId', as: 'products' });
  };

  return Product;
}; 