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
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING(255),
    deliveryNumber: DataTypes.STRING(255),
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING(255),
  },
    {
      tableName: 'Sales',
      timestamps: false,
      underscored: true,
    });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: 'id', as: 'Users' });
    Sale.belongsTo(models.User, { foreignKey: 'id', as: 'Sellers' });
  };

  return Sale;
}; 