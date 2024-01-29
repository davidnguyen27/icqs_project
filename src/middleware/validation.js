
/**
 * Returns an MD5 hash for the given `content`.
 *
 * @param {String} content
 *
 * @returns {String}
 */

function isPhoneNumber(str) {
    // check phone number has constain spaces, character, special character or not 
    if (!/^\d+$/.test(str)) {
        return false;
    }
    // Check if the string is exactly 10 digits
    if (str.length !== 10) {
        return false;
    }
    // If all checks pass, true is returned
    return true;
}

function isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      return false;
    }
  
    // Kiểm tra đuôi địa chỉ email phổ biến
    const commonEmailDomains = ['com', 'net', 'org', 'gov', 'edu'];
  
    const emailParts = email.split('.');
    const emailDomain = emailParts[emailParts.length - 1];
  
    return commonEmailDomains.includes(emailDomain);
  }

  function isValidPassword(password) {
    // Kiểm tra độ dài tối thiểu là 8 ký tự
    if (password.length < 8) {
        return false;
    }

    
    // Kiểm tra xem có chứa ít nhất một chữ cái in thường và một chữ cái in hoa
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);

    // Kiểm tra xem có chứa ít nhất một chữ số
    const hasDigit = /\d/.test(password);

    // Kiểm tra xem có chứa khoảng trắng hay không
    const hasWhitespace = /\s/.test(password);

    return hasLowercase && hasUppercase && hasDigit && !hasWhitespace;
}





module.exports = {
    isPhoneNumber, isEmailValid, isValidPassword
  }