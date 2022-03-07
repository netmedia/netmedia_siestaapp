export const userURL = `http://localhost:3005/entries?userId=${
  JSON.parse(localStorage.getItem("loginData")).googleId
}`;

export const baseURL = `http://localhost:3005/entries/`;
