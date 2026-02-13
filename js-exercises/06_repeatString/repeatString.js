const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    else {
        let arregloString = Array(num).fill(string.trim()).toString();
        return arregloString.replaceAll(",","");
    }
};

// Do not edit below this line
module.exports = repeatString;