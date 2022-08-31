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
      tableName: 'sales',
      timestamps: false,
    });

  Sale.associate = (models) => {
    // before ->
    // Sale.belongsTo(models.User, { foreignKey: 'id', as: 'user' });
    // Sale.belongsTo(models.User, { foreignKey: 'id', as: 'seller' });
  
    // after change FK ->
    Sale.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    Sale.belongsTo(models.User, { foreignKey: 'sellerId', as: 'seller' });
  };

  return Sale;
}; 