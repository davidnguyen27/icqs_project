
import { createHash } from 'node:crypto'
/**
 * Returns an MD5 hash for the given `content`.
 *
 * @param {String} content
 *
 * @returns {String}
 */
function md5(content) {  
  return createHash('md5').update(content).digest('hex')
}
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

module.exports = {
    isPhoneNumber, isEmailValid, md5
}