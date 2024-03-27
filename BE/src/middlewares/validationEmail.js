function isEmailValid(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return false;
  }
  const commonEmailDomains = ["com", "net", "org", "gov", "edu"];

  const emailParts = email.split(".");
  const emailDomain = emailParts[emailParts.length - 1];

  return commonEmailDomains.includes(emailDomain);
}

module.exports = {
  isEmailValid,
};
