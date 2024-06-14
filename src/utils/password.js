export const evaluatePasswordStrength = (password) => {
  if (!password) return "";

  let strength = "Weak";

  if (password.length < 4) {
    return strength;
  }

  const lengthCriteria = password.length >= 8;
  const uppercaseCriteria = /[A-Z]/.test(password);
  const lowercaseCriteria = /[a-z]/.test(password);
  const numberCriteria = /[0-9]/.test(password);
  const specialCharCriteria = /[!@#$%^&*]/.test(password);

  const criteriaMet = [
    lengthCriteria,
    uppercaseCriteria,
    lowercaseCriteria,
    numberCriteria,
    specialCharCriteria,
  ].filter(Boolean).length;

  if (criteriaMet >= 4) {
    strength = "Strong";
  } else if (criteriaMet >= 2) {
    strength = "Medium";
  }

  return strength;
};
