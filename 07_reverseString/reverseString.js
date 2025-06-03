const reverseString = function(string) {
    split = string.split('');
    result = "";
    for (let i = split.length - 1; i >= 0; i--){
        result += split[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
