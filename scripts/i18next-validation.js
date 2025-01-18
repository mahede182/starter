const validate = (message = '') => {
    // Check if the message is empty after trimming whitespace
    if (!(message || '').trim()) {
      throw new SyntaxError('Message is Empty.');
    }
    // Ensure the message is a string
    if (typeof message !== 'string') {
      throw new TypeError('Message must be a String.');
    }
    // Check for interpolation errors
    if (
      (message.includes('{') || message.includes('}')) &&
      !/{{ ?(?:- |\w+?)(, ?)?\w+? ?}}/g.test(message)
    ) {
      throw new SyntaxError(
        'Interpolation error. See: https://www.i18next.com/misc/json-format'
      );
    }
    // Check for nesting errors
    if (message.includes('$t(') && !/\$t\([\w]+:\w+(?:\.\w+)*\)/g.test(message)) {
      throw new SyntaxError(
        'Nesting error. See: https://www.i18next.com/misc/json-format'
      );
    }
  };
  
  module.exports = validate;