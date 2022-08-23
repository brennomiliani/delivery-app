module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
    },
    sellerId: {
      type: DataTypes.INTEGER,
      field: 'seller_id',
    },
    totalPrice: {
      type: DataTypes.DECIMAL(9, 2),
      field: 'total_price'
    },
    deliveryAddress: {
      type: DataTypes.STRING(255),
      field: 'delivery_address'
    },
    deliveryNumber: {
      type: DataTypes.STRING(255),
      field: 'delivery_number'
    },
    saleDate: {
      type: DataTypes.DATE,
      field: 'sale_date'
    },
    status: {
      type: DataTypes.STRING(255),
    },
  },
    {
      tableName: 'Sales',
      timestamps: false,
    });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: 'id', as: 'Users' });
    Sale.belongsTo(models.User, { foreignKey: 'id', as: 'Sellers' });
  };

  return Sale;
}; 