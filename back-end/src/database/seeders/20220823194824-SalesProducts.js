module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('SalesProducts', [
      {
        saleId: 1,
        productId: 1,
        quantity: 1,
      },
      {
        saleId: 1,
        productId: 2,
        quantity: 1,
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('SalesProducts', null, {});
  },
};
