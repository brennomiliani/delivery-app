module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('salesProducts', [
      {
        sale_id: 1,
        product_id: 1,
        quantity: 1,
      },
      {
        sale_id: 1,
        // product_id: 2,
        product_id: 3,
        quantity: 1,
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('salesProducts', null, {});
  },
};
