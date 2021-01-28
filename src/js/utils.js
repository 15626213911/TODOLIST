/**
 * 判断是否数字
 * @param {number}
 * @returns {boolean}
 */
export const isNumber = (num) => {
  return typeof num === 'number' && !isNaN(num)
}

/**
 * 判断是否字符串且非空
 * @param {string}
 * @returns {boolean}
 */
export const isString = (str) => {
  return typeof str === 'string' && str !== ''
}

/**
 *  去除首位空格
 * @param {string}
 * @returns {string}
 */
export const trimStr = (str) => {
  return str.replace(/(^\s*)|(\s*$)/g, '')
}
