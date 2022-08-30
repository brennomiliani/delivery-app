export const getUserAcessFromLocal = () => JSON
  .parse(localStorage.getItem('user'));
export const setUserAcessToLocal = (newUser) => localStorage
  .setItem('user', JSON.stringify(newUser));

export const addAcessUserToLocal = (user) => {
  if (!JSON.parse(localStorage.getItem('user'))) {
    localStorage.setItem('user', JSON
      .stringify({ name: '' }));
  }
  if (user) {
    setUserAcessToLocal(user);
  }
};

// add carrinho
export const getShopCartFromLocal = () => JSON
  .parse(localStorage.getItem('carrinho'));
export const setShopCartToLocal = (newList) => localStorage
  .setItem('carrinho', JSON.stringify(newList));

export const addProductsToLocal = (products) => {
  if (!JSON.parse(localStorage.getItem('carrinho'))) {
    localStorage.setItem('carrinho', JSON
      .stringify([]));
  }
  if (products.length) {
    setShopCartToLocal(products);
  }
};

export const removeProductToLocal = (id) => {
  const removeProd = getShopCartFromLocal().filter((item) => item.id !== Number(id));
  setShopCartToLocal(removeProd);
};
