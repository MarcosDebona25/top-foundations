/* const palindromes = function (stringArg) {
    let text = stringArg.replaceAll(" ", "");

    text = text.replace(/[^\w\s]|_/g, '');
    text = text.toLowerCase(text);

    let j = text.length - 1;
    let palindrome = true;

    for (let i = 0; i < text.length && palindrome; i++) {
        if (text[i] !== text[j]) {
            palindrome = false;
        }
        else j--;
    }

    return palindrome;

}; */


const palindromes = function (str) {
    let text = str.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
    return text === text.split("").reverse().join("");
}

// Do not edit below this line
module.exports = palindromes;