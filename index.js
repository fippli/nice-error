const errors = require('./errors.js');

/**
 * Create a nice error message
 * @param {function} func - Function that errors
 * @param {Object} error - Error object
 * @param {string=} message - Additional message to provide more help
 * @returns {string} - Returns a concise error string that should be printed with console.error
 */
const niceError = (func, error) => (
`Tried to call ${func.name} but got error:

    "${error.message}"

${errors[error.message] || ''}`
)

module.exports = niceError;
