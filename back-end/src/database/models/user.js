module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING(255),
    password: DataTypes.STRING(255),
    email: DataTypes.STRING(255),
    role: DataTypes.STRING(255),
  },
    {
      tableName: 'users',
      timestamps: false,
    });

  User.associate = (models) => {
    User.hasMany(models.Sale, { foreignKey: 'userId', as: 'user' });
    User.hasMany(models.Sale, { foreignKey: 'sellerId', as: 'seller' });
  };

  return User;
}; 
