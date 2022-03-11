export const getFromLocal = (key) => JSON.parse(localStorage.getItem(key));

export const saveToLocal = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const deleteFromLocal = (key) => localStorage.removeItem(key);
