const { Product, User, Sale } = require('../database/models');
const { StatusCodes } = require('http-status-codes');
const HttpException = require('../shared/HttpException');

const getAll = async () => {
  const products = await Product.findAll();
  return products;
};

const getOrderById = async ({ id }) => {
  const isValidSale = await Sale.findOne({ where: { id } });
  if (!isValidSale) throw new HttpException(StatusCodes.NOT_FOUND, 'Sale Not Found');
  const sale = await Sale.findOne({ where: { id },
    include: [{ model: User, as: 'seller', attributes: ['name'] },
    { model: Product, as: 'products', through: { attributes: ['quantity'] } }] });
  return sale;
};

// the new return ---->

// {
//   "id": 1,
//   "userId": 3,
//   "sellerId": 2,
//   "totalPrice": "4.69",
//   "deliveryAddress": "Rua Cachaça 51, Bairro Tequila",
//   "deliveryNumber": "+553199120-2020",
//   "saleDate": "2022-08-01T19:58:00.000Z",
//   "status": "Pendente",
//   "seller": {
//       "name": "Fulana Pereira"
//   },
//   "products": [
//       {
//           "id": 1,
//           "name": "Skol Lata 250ml",
//           "price": "2.20",
//           "url_image": "http://localhost:3001/images/skol_lata_350ml.jpg",
//           "SaleProduct": {
//               "quantity": 1
//           }
//       },
//       {
//           "id": 3,
//           "name": "Antarctica Pilsen 300ml",
//           "price": "2.49",
//           "url_image": "http://localhost:3001/images/antarctica_pilsen_300ml.jpg",
//           "SaleProduct": {
//               "quantity": 1
//           }
//       }
//   ]
// }

module.exports = {
  getAll,
  getOrderById,
};
