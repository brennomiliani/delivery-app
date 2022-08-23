module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Sales', [
      {
        userId: 3,
        sellerId: 2,
        totalPrice: 4.69,
        deliveryAddress: 'Rua Cachaça 51, Bairro Tequila',
        deliveryNumber: '+553199120-2020',
        saleDate: new Date('2022-08-01T19:58:00.000Z'),
        status: 'Pendente'
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Sales', null, {});
  },
};
