export function validateEmail(email) {
  const regEx = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  return regEx.test(String(email));
};