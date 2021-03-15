const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  if (arr === undefined || arr === []){
    return 0;
  }
  return arr.join(',').split(',').filter(item =>  item === '^^').length
};
