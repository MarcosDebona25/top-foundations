const reverseString = function(word) {
    let wordReversed = "";
    let char;
    
    for (let i = word.length -1; i>=0 ; i--) {
        char = word.charAt(i);
        wordReversed += char;
    }
    return wordReversed
};

// Do not edit below this line
module.exports = reverseString;