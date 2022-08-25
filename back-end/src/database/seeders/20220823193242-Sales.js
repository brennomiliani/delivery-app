module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('sales', [
      {
        user_id: 3,
        seller_id: 2,
        total_price: 4.69,
        delivery_address: 'Rua Cachaça 51, Bairro Tequila',
        delivery_number: '+553199120-2020',
        sale_date: new Date('2022-08-01T19:58:00.000Z'),
        status: 'Pendente'
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
};
