const palindromes = function (word) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    if(word.toLowerCase().split("").filter((character) => alphanumerical.includes(character)).reverse().join("") 
        === word.toLowerCase().split("").filter((character) => alphanumerical.includes(character)).join("")) return true;
    return false;

};

// Do not edit below this line
module.exports = palindromes;
