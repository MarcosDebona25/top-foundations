const removeFromArray = function(arreglo, ...args) {
    return arreglo.filter(elemento => !args.includes(elemento));
};
    
// Do not edit below this line
module.exports = removeFromArray;