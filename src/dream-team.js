const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr){
  if(Array.isArray(arr) === false){
    return false;
  }
  let result = [];
  arr.forEach(function(item){
    if(typeof item === "string"){
      result.push(item.trim().toUpperCase().charAt(0));
    }
  });
  return result.sort().join('');
};