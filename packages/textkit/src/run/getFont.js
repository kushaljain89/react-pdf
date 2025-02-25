/**
 * Get run font
 *
 * @param {Object}  run
 * @returns {Object} font
 */
const getFont = run => run.attributes?.font || null;

export default getFont;
