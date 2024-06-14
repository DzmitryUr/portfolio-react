export const evaluatePasswordStrength = (password) => {
  if (!password) return "";

  let strength = "Weak";

  if (password.length < 4) {
    return strength;
  }

  const legthCriteria = password.length >= 8;
  const uppercase = /[A-Z]/.test(password);
  const lowercase = /[a-z]/.test(password);
  const numberChar = /[0-9]/.test(password);
  const specialChar = /[!@#$%^&*]/.test(password);

  const criteriaMet = [
    legthCriteria,
    uppercase,
    lowercase,
    numberChar,
    specialChar,
  ].filter(Boolean).length;

  if (criteriaMet >= 4) {
    strength = "Strong";
  } else if (criteriaMet >= 2) {
    strength = "Medium";
  }

  return strength;
};
