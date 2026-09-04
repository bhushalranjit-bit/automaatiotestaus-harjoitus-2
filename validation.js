export function validateEmail(email) {
  return typeof email === "string" &&
    email.includes("@") &&
    email.includes(".");
}

export function validatePassword(password) {
  return typeof password === "string" &&
    password.length >= 10;
}

export function validateAge(age) {
  return Number.isInteger(age) &&
    age >= 16 &&
    age <= 120;
}