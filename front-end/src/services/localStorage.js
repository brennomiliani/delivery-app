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
