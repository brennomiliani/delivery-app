// import React, { useState } from 'react';

// function CardAdress() {
//   const [sellers, _setSellers] = useState([]);
//   const [infoAdressSeller, setInfoAdress] = useState({ seller: '', adress: '', number: 0 });

//   const handleInput = ({ target: { name, value } }) => {
//     setInfoAdress((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <form className="container-account-balance">
//       <label htmlFor="seller">
//         P.Vendedora Responsável
//       </label>
//       <select
//         data-testid="customer_checkout__select-seller"
//         id="seller"
//         name="seller"
//         value={ infoAdressSeller.seller }
//         onChange={ handleInput }
//       >
//         { sellers.map((seller) => (
//           <option key={ seller } value={ seller }>{seller}</option>
//         ))}
//       </select>

//       <label htmlFor="adress">
//         Endereço
//       </label>
//       <input
//         name="adress"
//         type="text"
//         data-testid="customer_checkout__input-address"
//         id="adress"
//         value={ infoAdressSeller.adress }
//         onChange={ handleInput }
//       />

//       <label htmlFor="number">
//         Número
//       </label>
//       <input
//         name="number"
//         type="text"
//         data-testid="customer_checkout__input-addressNumber"
//         id="number"
//         value={ infoAdressSeller.number }
//         onChange={ handleInput }
//       />
//     </form>
//   );
// }

// export default CardAdress;
